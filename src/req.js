import defaults from 'lodash/defaults';
import includes from 'lodash/includes';

import {
  ServerError,
  ClientError,
  ConnectionError,
  TimeoutError,
} from './errors';

import Response from './response';

/**
 * @description request data from server
 * @param {string} method - GET POST PUT DELETE HEAD
 * @param {string} url - request URL
 * @param {object} options - request options
 * @return {Promise} - return promise fulfill witch response and reject witch error
 */
const req = (method, url, options) => {

  options = defaults({}, options, req.defaultOptions);

  let xhr = new XMLHttpRequest();

  let promise = new Promise((fulfill, reject) => {
    try {
      method = (method + '').toUpperCase();

      let data;
      if (includes(['GET', 'HEAD'], method)) {
        data = null;
      } else {
        data = options.data;
      }

      // set timout
      let timeout = options.timeout;
      if (timeout) {
        xhr.timeout = timeout;
        xhr.ontimeoute = (e) => {
          let timeoutError = new TimeoutError();
          timeoutError.response = new Response(xhr);
          reject(timeoutError);
        };
      }

      xhr.open(method, url);

      xhr.onerror = (e) => {
        let connectionError = new ConnectionError();
        connectionError.response = new Response(xhr);
        reject(connectionError);
      };

      xhr.onreadystatechange = (e) => {
        if (xhr.readyState === 4) {
          if (xhr.status >= 500) {
            let serverError = new ServerError(`Code: ${xhr.status}, Text: ${xhr.statusText}`);
            serverError.response = new Response(xhr);
            reject(serverError);
          } else if (xhr.status >= 400) {
            let clientError = new ClientError(`Code: ${xhr.status}, Text: ${xhr.statusText}`);
            clientError.response = new Response(xhr);
            reject(clientError);
          } else {
            let response = new Response(xhr);
            fulfill(response);
          }
        }
      };

      xhr.send(data);
    } catch(e) {
      let connectionError = new ConnectionError();
      connectionError.response = new Response(xhr);
      connectionError.exception = e;
      reject(connectionError);
    }

  });

  promise.abort = () => xhr.abort();

  return promise;

};


export default req;
