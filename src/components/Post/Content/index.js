import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-left: 1px solid ${(props) => props.theme.border};
  padding: 8px;
  min-width: 0;
`;

export default function PostContent() {
  return <>postcontent</>;
}

function renderContent() {}
