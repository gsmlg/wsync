import wsync from '../../src/wsync';

describe('wsync', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(wsync, 'greet');
      wsync.greet();
    });

    it('should have been run once', () => {
      expect(wsync.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(wsync.greet).to.have.always.returned('hello');
    });
  });
});
