import {
  ServerError,
  ClientError,
  ConnectionError,
  TimeoutError,
  AbortError } from '../../src/errors';

describe('wsync.Errors', () => {

  it('Create ServerError Instance and have a name `ServerError`', () => {
    expect(new ServerError).to.be.instanceof(Error).that.have.property('name').that.to.equal('ServerError');
  });

  it('Create ClientError Instance and have a name `ClientError`', () => {
    expect(new ClientError).to.be.instanceof(Error).that.have.property('name').that.to.equal('ClientError');
  });

  it('Create ConnectionError Instance and have a name `ConnectionError`', () => {
    expect(new ConnectionError).to.be.instanceof(Error).that.have.property('name').that.to.equal('ConnectionError');
  });

  it('Create TimeoutError Instance and have a name `TimeoutError`', () => {
    expect(new TimeoutError).to.be.instanceof(Error).that.have.property('name').that.to.equal('TimeoutError');
  });

  it('Create AbortError Instance and have a name `AbortError`', () => {
    expect(new AbortError).to.be.instanceof(Error).that.have.property('name').that.to.equal('AbortError');
  });

});
