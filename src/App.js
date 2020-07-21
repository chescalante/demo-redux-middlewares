import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { persona, auto } from "./actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(persona().setNombre("Juan"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(auto().setMarca("Fiat"));
  }, [dispatch]);

  return <div>hola mundo!</div>;
}

export default App;
