import React, { createContext, useMemo, useReducer } from "react";

export const AppContext = createContext();

export const initialState = {
  visibleArea: { bottom: null, height: null, top: null },
};

export const SET_VISIBLE_AREA = "app/SET_VISIBLE_AREA";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBLE_AREA:
      return { ...state, visibleArea: action.visibleArea };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { dispatch: memDispatch, state: memState } = useMemo(
    () => ({ dispatch, state }),
    [dispatch, state]
  );

  return (
    <AppContext.Provider value={{ dispatch: memDispatch, state: memState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
