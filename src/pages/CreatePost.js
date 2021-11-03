import categories from "categories";
import Form from "components/shared/form/Form";
import Input from "components/shared/form/Input";
import InputWrapper from "components/shared/form/InputWrapper";
import Label from "components/shared/form/Label";
import { RadioGroupWrapper } from "components/shared/form/RadioGroup";
import RadioGroupOption from "components/shared/form/RadioGroup/Option";
import SelectWrapper from "components/shared/form/SelectWrapper";
import SubmitButton from "components/shared/form/SubmitButton";
import { useState } from "react";

const postTypes = [
  {
    label: "link",
    value: "link",
  },
  {
    label: "text",
    value: "text",
  },
];

export default function CreatePost() {
  const [type, setType] = useState("text");

  return (
    <Form wide>
      <InputWrapper>
        <RadioGroupWrapper>
          {postTypes.map((option, index) => (
            <RadioGroupOption
              {...option}
              key={index}
              onClick={() => setType(option.value)}
              active={option.value === type}
            />
          ))}
        </RadioGroupWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>Category</Label>
        <SelectWrapper>
          <Input type="select" as="select" defaultValue={categories[0]}>
            {categories.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </Input>
        </SelectWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>title</Label>
        <Input type="text" placeholder="title" />
      </InputWrapper>
      {type === "link" && (
        <InputWrapper>
          <Label>url</Label>
          <Input placeholder="url" />
        </InputWrapper>
      )}
      {type === "text" && (
        <InputWrapper>
          <Label>text</Label>
          <Input placeholder="text" as="textarea" rows="6" />
        </InputWrapper>
      )}
      <SubmitButton type="submit">create post</SubmitButton>
    </Form>
  );
}
