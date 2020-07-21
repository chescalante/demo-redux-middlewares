const apiCallsMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  const {
    type,
    callAPI,
    shouldCallAPI = () => true,
    payload = {},
    inited,
    completed,
    failed,
  } = action;

  if (!callAPI) {
    // Normal action: pass it on
    return next(action);
  }

  if (typeof callAPI !== "function") {
    throw new Error("Expected callAPI to be a function.");
  }

  if (!shouldCallAPI(getState())) {
    return;
  }

  const initedType = `${type}/inited`;
  const completedType = `${type}/completed`;
  const failedType = `${type}/failed`;

  dispatch(
    Object.assign({}, payload, {
      type: initedType,
      inited,
    })
  );

  return callAPI().then(
    (response) =>
      dispatch(
        Object.assign({}, payload, {
          response,
          type: completedType,
          completed,
        })
      ),
    (error) =>
      dispatch(
        Object.assign({}, payload, {
          error,
          type: failedType,
          failed,
        })
      )
  );
};

export default apiCallsMiddleware;
