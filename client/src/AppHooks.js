import { useCallback, useContext } from "react";

import { AppContext, SET_VISIBLE_AREA } from "./AppState";

export const useAppHooks = () => {
  const { dispatch, state } = useContext(AppContext);

  const setVisibleArea = useCallback(
    (visibleArea) => dispatch({ type: SET_VISIBLE_AREA, visibleArea }),
    [dispatch]
  );

  return { setVisibleArea, state };
};
