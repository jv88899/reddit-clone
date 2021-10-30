import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 10vw;

  @media (max-width: 1024px) {
    margin: 0 5vw;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;

const HomeMainSection = styled.main`
  flex: 1;
  min-width: 0;
`;

export default function Home() {
  return <>home</>;
}
