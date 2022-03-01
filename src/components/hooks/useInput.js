import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const valueReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: action.isTouched };
  }
  if (action.type === "RESET") {
    return { value: action.value, isTouched: action.isTouched };
  }
};

const useInput = (validateValue) => {
  const [valueState, dispatchValue] = useReducer(valueReducer, initialState);

  const valueIsValid = validateValue(valueState.value);

  const hasError = !valueIsValid && valueState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchValue({ type: "CHANGE", value: event.target.value });
  };

  const valueBlurHandler = () => {
    dispatchValue({ type: "BLUR", isTouched: true });
  };

  const valueResetHandler = () => {
    dispatchValue({ type: "RESET", value: "", isTouched: false });
  };

  return {
    value: valueState.value,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    valueBlurHandler,
    valueResetHandler,
  };
};

export default useInput;
