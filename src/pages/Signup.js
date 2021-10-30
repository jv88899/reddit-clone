import Form from "components/shared/form/Form";
import Input from "components/shared/form/Input";
import InputWrapper from "components/shared/form/InputWrapper";
import Label from "components/shared/form/Label";
import SubmitButton from "components/shared/form/SubmitButton";
import { signupUser } from "lib/firebase";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  async function onSubmit(event) {
    event.preventDefault();
    const { username, email, password, confirm } = event.target.elements;
    const userCreds = await signupUser({
      email: email.value,
      password: password.value,
    });
    console.log(userCreds);
  }

  console.log(errors);

  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <Label>username</Label>
        <Input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 5,
              message: "Must be at least 5 characters",
            },
            maxLength: {
              value: 20,
              message: "Must be less than 20 characters",
            },
          })}
          type="text"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>email</Label>
        <Input
          {...register("email", {
            required: "Email is required",
            maxLength: {
              value: 30,
              message: "Must be less than 30 characters",
            },
          })}
          type="email"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>password</Label>
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Must be at least 8 characters",
            },
            maxLength: {
              value: 30,
              message: "Must be less than 30 characters",
            },
          })}
          type="password"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>confirm password</Label>
        <Input
          {...register("confirm", {
            required: "Confirm is required",
            minLength: {
              value: 8,
              message: "Must be at least 8 characters",
            },
            maxLength: {
              value: 30,
              message: "Must be less than 30 characters",
            },
          })}
          type="password"
        />
      </InputWrapper>
      <SubmitButton type="submit">sign up</SubmitButton>
    </Form>
  );
}
