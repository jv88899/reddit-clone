import styled from "styled-components/macro";

const Menu = styled.nav`
  display: none;
  border: 1px solid ${(props) => props.theme.border};
  border-left: none;
  border-right: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default function CategoryMenu() {
  return <>categorymenu</>;
}
