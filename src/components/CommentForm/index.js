import Form from "components/shared/form/Form";
import Input from "components/shared/form/Input";
import { transition } from "components/shared/helpers";
import styled from "styled-components/macro";

const StyledForm = styled(Form)`
  ${transition("border", "box-shadow")};

  margin-top: -1px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0 0 2px 2px;
  max-width: none;
  padding: 0;

  @media (hover: hover) {
    :hover {
      border: 1px solid ${(props) => props.theme.accent};
    }
  }

  :focus-within {
    border: 1px solid ${(props) => props.theme.accent};
    box-shadow: 0 0 0 2px ${(props) => props.theme.accent + "4d"};
  }

  @media (max-width: 768px) {
    margin-top: -1px;
    border-radius: 0;
    border-left: none;
    border-right: none;

    :hover,
    :focus-within {
      border-left: none;
      border-right: none;
    }
  }
`;

const CommentFormTextArea = styled(Input)`
  margin: 0;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.border};
  border-radius: 0;
  resize: none;

  :hover,
  :focus {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.border};
    box-shadow: none;
  }
`;

export default function CommentForm() {
  return <>commentform</>;
}
