import { transform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { useAppHooks } from "../../AppHooks";
import Wrapper from "./styled";

const Header = () => {
  const {
    state: { visibleArea },
  } = useAppHooks();
  const wrapperRef = useRef();
  const [wrapperPosition, setWrapperPosition] = useState(null);

  useEffect(() => {
    setWrapperPosition(() => wrapperRef.current.getBoundingClientRect());
  }, []);

  return (
    <Wrapper
      scrollRatio={transform(
        visibleArea?.top,
        [0, wrapperPosition?.bottom],
        [0, 1]
      )}
      visibilityRatio={transform(
        visibleArea?.top,
        [0, wrapperPosition?.bottom],
        [0.25, 0.75]
      )}
      ref={wrapperRef}
    >
      <div>Sasha Zahnitko</div>
      <div>REACT Web Developer</div>
    </Wrapper>
  );
};

export default Header;
