import PostContentDetail from "components/Post/Content/Detail";
import PostContentTitle from "components/Post/Content/Title";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-left: 1px solid ${(props) => props.theme.border};
  padding: 8px;
  min-width: 0;
`;

export default function PostContent({ post, full }) {
  return (
    <Wrapper>
      <PostContentTitle post={post} full={full} />
      {renderContent(post, full)}
      <PostContentDetail post={post} full={full} />
    </Wrapper>
  );
}

function renderContent() {}
