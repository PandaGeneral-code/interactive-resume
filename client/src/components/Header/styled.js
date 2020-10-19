import styled from "styled-components";

import banner from "../../images/banner_6.jpg";

const Wrapper = styled.div.attrs(({ scrollRatio }) => ({
  style: { backgroundPosition: `50% ${scrollRatio * 100}%` },
}))`
  align-items: center;
  background: linear-gradient(
      ${({ theme: { lighten }, visibilityRatio }) =>
        `${lighten("buddhaGold", visibilityRatio)}, ${lighten(
          "cerulean",
          visibilityRatio
        )}`}
    ),
    url(${banner});
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  height: 66%;
  justify-content: center;

  color: ${(props) => props.theme.lighten("white")};
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export default Wrapper;
