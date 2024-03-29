import React from "react";
import { Field, Form } from "react-final-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { validation } from "./helpers";
import { SubmissionErrors } from "final-form";

export type FormValues = { login: string; password: string };
type AuthFormProps = {
  onSubmit: (values: FormValues) => Promise<void | SubmissionErrors>;
};

const AuthForm = ({ onSubmit }: AuthFormProps) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        return validation(values);
      }}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        submitError,
        hasValidationErrors,
        hasSubmitErrors,
        modifiedSinceLastSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field name="login">
            {(props) => (
              <Box mt={1} display="flex" flexDirection="column">
                <label htmlFor="login">
                  <Typography variant="h6" textTransform="capitalize">
                    логин
                  </Typography>
                </label>
                <TextField
                  {...props.input}
                  id="login"
                  size="small"
                  variant="outlined"
                  placeholder="введите логин"
                  error={props.meta.touched && props.meta.invalid}
                  helperText={props.meta.touched && props.meta.error}
                />
              </Box>
            )}
          </Field>
          <Field name="password">
            {(props) => (
              <Box mt={1} display="flex" flexDirection="column">
                <label htmlFor="password">
                  <Typography variant="h6" textTransform="capitalize">
                    пароль
                  </Typography>
                </label>
                <TextField
                  {...props.input}
                  id="password"
                  type="password"
                  size="small"
                  variant="outlined"
                  placeholder="введите пароль"
                  error={props.meta.touched && props.meta.invalid}
                  helperText={props.meta.touched && props.meta.error}
                />
              </Box>
            )}
          </Field>
          <Box display="flex" justifyContent="center">
            <Box mt={2} mr={2}>
              <Button
                type="submit"
                disabled={
                  hasValidationErrors ||
                  submitting ||
                  pristine ||
                  (hasSubmitErrors && !modifiedSinceLastSubmit)
                }
                size="small"
                variant="contained"
                color="primary"
              >
                <Typography variant="body1">войти</Typography>
              </Button>
            </Box>
            <Box mt={2}>
              <Button
                type="button"
                onClick={() => {
                  form.reset();
                  submitError.reset();
                }}
                disabled={submitting || pristine}
                size="small"
                variant="outlined"
                color="primary"
              >
                <Typography variant="body1">очистить</Typography>
              </Button>
            </Box>
          </Box>
          <Box mt={1}>
            <Typography whiteSpace="pre-wrap" variant="body2" color="red">
              {submitError}
            </Typography>
          </Box>
        </form>
      )}
    />
  );
};

export default AuthForm;
