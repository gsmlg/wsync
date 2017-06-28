import wsync from '../../src/wsync';

describe('wsync', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(wsync, 'req');
    });

    it('should return promise', () => {
      expect(wsync.req('GET', '/')).to.be.a('promise');
    });
  });
});
