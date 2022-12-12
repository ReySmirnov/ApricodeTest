import { authValidationSchema } from "./authValidationSchema";
import { ValidationError } from "yup";
import { FormValues } from "./index";

export const validation = (values: FormValues) =>
  authValidationSchema
    .validate(values, { abortEarly: false })
    .then(() => {})
    .catch((err: ValidationError) => {
      return err.inner.reduce<Record<string, string>>((acc, error) => {
        acc[error.path!] = error.message;
        return acc;
      }, {});
    });