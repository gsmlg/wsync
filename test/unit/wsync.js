import wsync from '../../src/wsync';

describe('wsync', () => {
  describe('test req GET', () => {

    it('should return promise', () => {
      expect(wsync.req('GET', '/')).toBeInstanceOf(Promise);
    });

    it('is a test demo', () => {
      expect(true).toBeTruthy();
      expect(false).toBeTruthy();
    });

  });
});
