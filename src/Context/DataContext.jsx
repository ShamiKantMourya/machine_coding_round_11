import React, { useEffect, useReducer } from "react";
import { createContext } from "react";

import { initial_state, reducer } from "../Reducer/Reducer";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const { movie, watch_list, star } = state;

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watch_list));
    localStorage.setItem("starred", JSON.stringify(star));
  }, [watch_list, star, movie]);
  return (
    <DataContext.Provider
      value={{ movie, watch_list, star, addDataDispatch: dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};
