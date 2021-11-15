import PostVoteDownvote from "components/Post/Vote/Downvote";
import PostVoteUpvote from "components/Post/Vote/Upvote";
import { toggleVote } from "lib/firebase";
import { useMutation, useQueryClient } from "react-query";
import { useLocation } from "react-router-dom";
import useStore from "store";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  padding: 4px;
  font-size: 12px;
  line-height: 25px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.normalText};
`;

export default function PostVote({ post }) {
  const { id: postId, score, votes } = post;
  const user = useStore((state) => state.user);
  const userId = user?.uid;
  const didUpvote = votes[userId] === 1;
  const didDownvote = votes[userId] === -1;
  const queryClient = useQueryClient();
  const location = useLocation();
  const mutation = useMutation(toggleVote, {
    onSuccess: () => {
      const isHomePage = location.pathname === "/";
      queryClient.invalidateQueries(isHomePage ? "posts" : ["post", postId]);
    },
  });

  function onUpvote() {
    mutation.mutate({ userId, postId, value: 1 });
  }

  function onDownvote() {
    mutation.mutate({ userId, postId, value: -1 });
  }

  return (
    <Wrapper>
      <PostVoteUpvote onClick={onUpvote} canVote={user} didVote={didUpvote} />
      <span>{score}</span>
      <PostVoteDownvote
        onClick={onDownvote}
        canVote={user}
        didVote={didDownvote}
      />
    </Wrapper>
  );
}
