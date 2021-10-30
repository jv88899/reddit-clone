import { headerItem } from "components/shared/helpers";
import styled from "styled-components/macro";
import HeaderDarkButtonIcon from "./Icon";

const DarkButton = styled.span`
  ${headerItem};

  padding: 0 8px;
  cursor: pointer;

  @media (hover: hover) {
    :hover path {
      fill: ${(props) => props.theme.accent};
    }
  }
`;

export default function HeaderDarkButton() {
  return (
    <DarkButton>
      <HeaderDarkButtonIcon />
    </DarkButton>
  );
}
