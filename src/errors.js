export class ServerError extends Error {
  name = 'ServerError';
}

export class ClientError extends Error {
  name = 'ClientError';
}

export class ConnectionError extends Error {
  name = 'ConnectionError';
}

export class TimeoutError extends Error {
  name = 'TimeoutError';
}

export class AbortError extends Error {
  name = 'AbortError';
}
