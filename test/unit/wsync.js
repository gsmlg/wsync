import wsync from '../../src/wsync';

describe('wsync', () => {
  describe('test req GET', () => {
    beforeEach(() => {
    });

    it('should return promise', () => {
      expect(wsync.req('GET', '/')).to.be.an.instanceOf(Promise);
    });

  });
});
