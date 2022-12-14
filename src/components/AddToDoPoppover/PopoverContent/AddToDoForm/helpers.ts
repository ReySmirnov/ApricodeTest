import { ValidationError } from "yup";
import {toDoValidationSchema} from "./toDoValidationSchema";

export const validationToDoForm = (values: { inputToDo:string }) =>
  toDoValidationSchema
    .validate(values, { abortEarly: false })
    .then(() => {})
    .catch((err: ValidationError) => {
      return err.inner.reduce<Record<string, string>>((acc, error) => {
        acc[error.path!] = error.message;
        return acc;
      }, {});
    });