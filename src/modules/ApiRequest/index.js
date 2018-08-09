const REQUEST_MADE = "apiRequest/REQUEST_MADE";
const REQUEST_IS_BAD = "apiRequest/REQUEST_IS_BAD";
const REQUEST_FAILED = "apiRequest/REQUEST_FAILED";
const RESPONSE_RECIEVED = "apiRequest/RESPONSE_RECIEVED";

const responseReceived = (response) => ({
  type: RESPONSE_RECIEVED,
  payload: {
    response,
  },
});

const requestIsBad = (request, response) => ({
  type: REQUEST_IS_BAD,
  payload: {
    request,
    response,
  },
});

const requestFailed = (request) => ({
  type: REQUEST_FAILED,
  error: true,
  payload: {
    request,
  },
});

const requestMade = (request) => ({
  type: REQUEST_MADE,
  payload: {
    request,
  },
});

export {
  requestMade,
  requestFailed,
  requestIsBad,
  responseReceived,
};