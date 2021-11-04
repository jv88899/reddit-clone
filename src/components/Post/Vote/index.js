import PostVoteDownvote from "components/Post/Vote/Downvote";
import PostVoteUpvote from "components/Post/Vote/Upvote";
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

  return (
    <Wrapper>
      <PostVoteUpvote canVote={user} didVote={didUpvote} />
      <span>{score}</span>
      <PostVoteDownvote canVote={user} didVote={didDownvote} />
    </Wrapper>
  );
}
