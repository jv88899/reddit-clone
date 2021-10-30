import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 8px;
  font-size: 13px;
`;

const Timestamp = styled.span`
  margin-left: 4px;
  color: ${(props) => props.theme.mutedText};
`;

export default function CommentDetail() {
  return <>commentdetail</>;
}
