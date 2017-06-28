import defaults from 'lodash/defaults';

class Response {
  constructor(xhr) {
    this.xhr = xhr;
    this.status = xhr.status;
    this.__raw_header__ = xhr.getAllResponseHeaders();
    this.parseRawHeaders();
    this.body = xhr.responseText;
  }

  parseRawHeaders() {
    let text = this.__raw_header__;
    var headers = {};
    let lines = text.split(/\r\n|\n/);
    lines.forEach(line => {

    });
    this.headers = defaults({}, headers);
  }
}


export default Response;
