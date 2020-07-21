const persona = () => {
  const base = "persona";

  return {
    setNombre: (nombre) => ({
      type: `${base}/setNombre`,
      payload: { nombre },
      reducer: (state, action) => {
        return { ...state, nombre: action.payload.nombre };
      },
    }),

    setApellido: (apellido) => ({
      type: `${base}/setApellido`,
      payload: { apellido },
      reducer: (state, action) => {
        return { ...state, apellido: action.payload.apellido };
      },
    }),
  };
};

const auto = () => {
  const base = "auto";

  const initialState = {};

  return {
    setMarca: (marca) => ({
      type: `${base}/setMarca`,
      payload: { marca },
      // reducer: (state = initialState, action) => {
      //   return { ...action.payload };
      // },
      reducer: (state = initialState, action) => {
        return { ...state, marca: action.payload.marca };
      },
    }),

    setModelo: (modelo) => ({
      type: `${base}/setModelo`,
      payload: { modelo },
      reducer: (state = initialState, action) => {
        return { ...state, modelo: action.payload.modelo };
      },
    }),

    save: (solicitudId) => ({
      type: `${base}/save`,
      payload: { solicitudId },
      callAPI: () =>
        new Promise((resolve) => {
          setTimeout(() => resolve("OK " + solicitudId), 1000);
        }),
      inited: (state = initialState, action) => {
        return { ...state, isLoading: true };
      },
      completed: (state = initialState, action) => {
        return { ...state, isLoading: false, result: action.response };
      },
      failed: (state = initialState, action) => {
        return { ...state, isLoading: false, error: action.error };
      },
    }),
  };
};

export { persona, auto };
