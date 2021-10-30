import Form from "components/shared/form/Form";
import Input from "components/shared/form/Input";
import InputWrapper from "components/shared/form/InputWrapper";
import Label from "components/shared/form/Label";
import SubmitButton from "components/shared/form/SubmitButton";

export default function Signup() {
  return (
    <Form>
      <InputWrapper>
        <Label>username</Label>
        <Input type="text" />
      </InputWrapper>
      <InputWrapper>
        <Label>email</Label>
        <Input type="email" />
      </InputWrapper>
      <InputWrapper>
        <Label>password</Label>
        <Input type="password" />
      </InputWrapper>
      <InputWrapper>
        <Label>confirm password</Label>
        <Input type="password" />
      </InputWrapper>
      <SubmitButton type="submit">sign up</SubmitButton>
    </Form>
  );
}
