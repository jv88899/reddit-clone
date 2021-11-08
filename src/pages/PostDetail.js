import CommentForm from "components/CommentForm";
import CommentList from "components/CommentList";
import Post from "components/Post";
import DeleteButton from "components/shared/DeleteButton";
import Empty from "components/shared/Empty";
import LoadingIndicatorBox from "components/shared/LoadingIndicator/Box";
import { getPost } from "lib/firebase";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useStore from "store";
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
  const { postId } = useParams();
  const user = useStore((state) => state.user);
  const { data: post, isLoading } = useQuery(["post", postId], () =>
    getPost(postId)
  );

  if (isLoading) return <LoadingIndicatorBox />;
  if (!post) return <Empty />;

  return (
    <>
      <PostDetailPost post={post} />
      <PostDetailInfoBar postId={postId} post={post} user={user} />
      {user && <CommentForm postId={postId} />}
      <PostDetailCommentSection postId={postId} />
    </>
  );
}

function PostDetailPost({ post }) {
  return (
    <PostWrapper>
      <Post post={post} full />
    </PostWrapper>
  );
}

function PostDetailInfoBar({ user, postId, post }) {
  const { author, views, upvotePercentage } = post;

  const isAuthor = author.uid === user?.uid;

  return (
    <Wrapper round={!user}>
      <span>{views} view</span>
      <span>&nbsp; | &nbsp;</span>
      <span>{upvotePercentage}% upvoted</span>
      {isAuthor && <DeleteButton />}
    </Wrapper>
  );
}

function PostDetailCommentSection() {
  return <CommentList comments={[]} />;
}
