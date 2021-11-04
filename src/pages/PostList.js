import Post from "components/Post";
import Empty from "components/shared/Empty";
import LoadingIndicatorBox from "components/shared/LoadingIndicator/Box";
import { getPosts } from "lib/firebase";
import { useQuery } from "react-query";
import styled from "styled-components/macro";

const List = styled.ul`
  list-style: none;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 2px;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

const Item = styled.li`
  :not(:first-child) {
    border-top: 1px solid ${(props) => props.theme.border};
  }
`;

export default function PostList() {
  const { data: posts, isLoading } = useQuery("posts", getPosts);

  if (isLoading) return <LoadingIndicatorBox />;
  if (!posts || !posts.length) return <Empty />;

  return (
    <List>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </List>
  );
}

function PostListItem({ post }) {
  return (
    <Item>
      <Post post={post} full={false} />
    </Item>
  );
}
