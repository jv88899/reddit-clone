import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  height: auto;
  background-color: ${(props) => props.theme.foreground};
`;

export default function Post() {
  return <>post</>;
}
