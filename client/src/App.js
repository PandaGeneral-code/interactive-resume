import React, { useCallback, useEffect, useRef } from "react";

import Header from "./components/Header/Header";
import RootWrapper, { BigDiv } from "./styled";

import { useAppHooks } from "./AppHooks";

const App = () => {
  const { setVisibleArea, state } = useAppHooks();
  const wrapperRef = useRef();

  const handleVisibleArea = useCallback(
    (clientHeight, scrollTop) =>
      setVisibleArea({
        bottom: scrollTop + clientHeight,
        height: clientHeight,
        top: scrollTop,
      }),
    [setVisibleArea]
  );

  const handleScroll = useCallback(
    ({ target: { clientHeight, scrollTop } }) => {
      handleVisibleArea(clientHeight, scrollTop);
    },
    [handleVisibleArea]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    wrapper.addEventListener("scroll", handleScroll);
    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const { bottom, height, top } = wrapperRef.current.getBoundingClientRect();
    setVisibleArea({ bottom, height, top });
  }, [setVisibleArea]);

  return (
    <RootWrapper ref={wrapperRef}>
      <Header />
      <BigDiv>
        <pre>{JSON.stringify({ state }, null, 2)}</pre>
      </BigDiv>
    </RootWrapper>
  );
};

export default App;
