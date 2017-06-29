import defaults from 'lodash/defaults';

class Response {
  constructor(xhr) {
    this.xhr = xhr;
    this.status = xhr.status;
    this.__raw_header__ = xhr.getAllResponseHeaders();
    this.parseRawHeaders();
    this.body = xhr.responseText;
    if (this._headers['CONTENT_TYPE'].match(/\/json/)) {
      this.data = JSON.parse(this.body);
    } else {
      this.data = {text: this.boxy};
    }
  }

  parseRawHeaders() {
    let text = this.__raw_header__;
    var headers = {};
    var _headers = {};
    let lines = text.split(/\r\n|\n/);
    lines.forEach(line => {
      let match = /([^:]+): (.*)/.exec(line);
      if (match) {
        headers[match[1]] = match[2];
        let key = match[1].toUpperCase().replace(/[-_]/, '_');
        _headers[key] = match[2];
      }
    });
    this.headers = headers;
    this._headers = _headers;
  }
}


export default Response;
