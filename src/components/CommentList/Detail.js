import Author from "components/shared/Author";
import styled from "styled-components/macro";
import dayjs from "dayjs";
import useStore from "store";
import DeleteButton from "components/shared/DeleteButton";

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

export default function CommentDetail({ id, author, created }) {
  const user = useStore((s) => s.user);
  const isAuthor = user?.uid === author.uid;

  return (
    <Wrapper>
      <Author username={author.username} />
      <Timestamp>{dayjs(created.toDate()).fromNow()}</Timestamp>
      {isAuthor && <DeleteButton />}
    </Wrapper>
  );
}
