export default (request) => {
  const newRequest = {
    ...request,
    params: {
      ...request.params,
      key: process.env.REACT_APP_API_KEY
    }
  };
  return newRequest;
};
