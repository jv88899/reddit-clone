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

export default function PostVote() {
  return <>postvote</>;
}
