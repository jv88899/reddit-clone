import { link } from "components/shared/helpers";
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

export default function PostContentDetail() {
  return <>postcontentdetail</>;
}
