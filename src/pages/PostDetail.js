import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  margin-top: -1px;
  border: 1px solid ${(props) => props.theme.border};
  ${(props) => props.round && "border-radius: 0 0 2px 2px"};
  padding: 8px;
  background-color: ${(props) => props.theme.foreground};
  font-size: 13px;
  color: ${(props) => props.theme.mutedText};

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
`;

const PostWrapper = styled.div`
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 2px 2px 0 0;

  @media (max-width: 768px) {
    margin-bottom: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

export default function PostDetail() {
  return <>postdetail</>;
}

function PostDetailInfoBar() {
  return <>postdetailinfobar</>;
}

function PostDetailCommentSection() {
  return <>postdetailcommentsection</>;
}

function PostDetailPost() {
  return <>postdetailpost</>;
}
