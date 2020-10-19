import styled from "styled-components";

export const BigDiv = styled.div`
  height: 125%;
`;

const RootWrapper = styled.div`
  background-color: ${(props) => props.theme.mercury};
  height: 100%;
  min-height: 100%;
  overflow: hidden auto;
`;

export default RootWrapper;
