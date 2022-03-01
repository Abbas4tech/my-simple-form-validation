import React from "react";
import useInput from "../hooks/useInput";
import Button from "../UI/Button";
import Input from "../UI/Input";

const isNotEmpty = (value) => value.trim() !== "";

const Form = () => {
  const {
    value: name,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    valueResetHandler: nameResetHandler,
  } = useInput(isNotEmpty);

  const {
    value: phone,
    hasError: phoneHasError,
    isValid: phoneIsValid,
    valueChangeHandler: phoneChangeHandler,
    valueBlurHandler: phoneBlurHandler,
    valueResetHandler: phoneResetHandler,
  } = useInput((value) => value.length >= 10);

  console.log(nameHasError);

  const nameInputClasses = nameHasError ? "input-box invalid" : "input-box";
  const phoneInputClasses = phoneHasError ? "input-box invalid" : "input-box";

  let formIsValid = false;
  if (nameIsValid && phoneIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(name, phone);
    nameResetHandler();
    phoneResetHandler();
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <Input
          label="Name"
          class={nameInputClasses}
          input={{
            value: name,
            type: "text",
            id: "name",
            onChange: nameChangeHandler,
            onBlur: nameBlurHandler,
          }}
          error={nameHasError}
        />

        <Input
          label="Phone Number"
          class={phoneInputClasses}
          input={{
            value: phone,
            type: "number",
            id: "phone",
            onChange: phoneChangeHandler,
            onBlur: phoneBlurHandler,
          }}
          error={phoneHasError}
        />
        <Button type={"submit"} disabled={!formIsValid}>
          Add
        </Button>
      </form>
    </>
  );
};

export default Form;
