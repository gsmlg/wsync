import {
  ServerError,
  ClientError,
  ConnectionError,
  TimeoutError,
  AbortError } from '../../src/errors';

describe('wsync.Errors', () => {

  it('Create ServerError Instance and have a name `ServerError`', () => {
    let error = new ServerError;
    expect(error).toBeInstanceOf(Error);
    expect(error).toHaveProperty('name', 'ServerError');
  });

  it('Create ClientError Instance and have a name `ClientError`', () => {
    let error = new ClientError;
    expect(error).toBeInstanceOf(Error);
    expect(error).toHaveProperty('name', 'ClientError');
  });

  it('Create ConnectionError Instance and have a name `ConnectionError`', () => {
    let error = new ConnectionError;
    expect(error).toBeInstanceOf(Error);
    expect(error).toHaveProperty('name', 'ConnectionError');
  });

  it('Create TimeoutError Instance and have a name `TimeoutError`', () => {
    let error = new TimeoutError;
    expect(error).toBeInstanceOf(Error);
    expect(error).toHaveProperty('name', 'TimeoutError');
  });

  it('Create AbortError Instance and have a name `AbortError`', () => {
    let error = new AbortError;
    expect(error).toBeInstanceOf(Error);
    expect(error).toHaveProperty('name', 'AbortError');
  });

});
