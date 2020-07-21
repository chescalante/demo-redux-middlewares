const superReducer = (state = {}, action) => {
  const { type, reducer, inited, completed, failed } = action;

  if (!reducer && !inited && !completed && !failed) {
    // Normal action: pass it on
    return state;
  }

  const reducerToApply = reducer || inited || completed || failed;

  const base = type.split("/")[0];

  return {
    ...state,
    [base]: reducerToApply(state[base], action),
  };
};

export default superReducer;
