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

  console.log(nameHasError);

  const nameInputClasses = nameHasError ? "input-box invalid" : "input-box";

  let formIsValid = false;
  if (nameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(name);
    nameResetHandler();
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
        <Button type={"submit"} disabled={!formIsValid}>
          Add
        </Button>
      </form>
    </>
  );
};

export default Form;
