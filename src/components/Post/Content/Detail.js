import Author from "components/shared/Author";
import { link } from "components/shared/helpers";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  font-size: 13px;
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > * {
    margin-right: 4px;
  }

  & > a {
    ${link};
  }

  & > span {
    color: ${(props) => props.theme.mutedText};
  }
`;

export default function PostContentDetail({ post }) {
  const { catergory, id, author, created } = post;

  return (
    <Wrapper>
      <Link to={`/a/${catergory}/${id}`}>0 comments</Link>
      <Link to={`/a/${category}`}>/a/{category}</Link>
      <span>by</span>
      <Author username={author.username} />
      <span>created</span>
    </Wrapper>
  );
}
