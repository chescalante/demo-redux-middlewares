const superReducer = (state = {}, action) => {
  const { type, reducer } = action;

  if (!reducer) {
    // Normal action: pass it on
    return state;
  }

  const base = type.split("/")[0];

  return {
    ...state,
    [base]: reducer(state[base], action),
  };
};

export default superReducer;
