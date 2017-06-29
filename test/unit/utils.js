import {toQueryString} from '../../src/utils';

describe('wsync.utils', () => {
  describe('test toQueryString', () => {

    it('should parse object to query-string', () => {
      let obj = {a: 'b'};
      expect(toQueryString(obj)).to.equal('a=b');
    });

    it('should parse object include array to query-string', () => {
      let obj = {a: [1,2]};
      expect(toQueryString(obj)).to.equal('a%5B%5D=1&a%5B%5D=2');
    });

    it('should parse search object to query-string', () => {
      let obj = {search_attr: {
        'name|log': 'domain',
        'owner': 'local.master'
      }};
      let str = 'search_attr%5Bname%7Clog%5D=domain&search_attr%5Bowner%5D=local.master';
      expect(toQueryString(obj)).to.equal(str);
    });


  });
});
