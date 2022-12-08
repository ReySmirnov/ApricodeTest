import React from "react";
import { Field, Form } from "react-final-form";
import { Box, Button, TextField, Typography } from "@mui/material";

const AuthForm = () => {
  const onSubmit = (values: object) => {
    window.alert(JSON.stringify(values));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field name="loginInput">
            {(props) => (
              <Box mt={1} display="flex" flexDirection="column">
                <label htmlFor="loginInput">
                  <Typography variant="h6" textTransform='capitalize'>логин</Typography>
                </label>
                <TextField
                  {...props.input}
                  id="loginInput"
                  size="small"
                  variant="outlined"
                  placeholder="Введите логин"
                />
              </Box>
            )}
          </Field>
          <Field name="loginPassword">
            {(props) => (
              <Box mt={1} display="flex" flexDirection="column">
                <label htmlFor="loginPassword">
                  <Typography variant="h6" textTransform='capitalize'>пароль</Typography>
                </label>
                <TextField
                  {...props.input}
                  id="loginPassword"
                  size="small"
                  variant="outlined"
                  placeholder="Введите пароль"
                />
              </Box>
            )}
          </Field>

          <Box display="flex" justifyContent="center">
            <Box mt={2} mr={2}>
              <Button
                type="submit"
                disabled={submitting || pristine}
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
                onClick={form.reset}
                disabled={submitting || pristine}
                size="small"
                variant="outlined"
                color="primary"
              >
                <Typography variant="body1">очистить</Typography>
              </Button>
            </Box>
          </Box>
        </form>
      )}
    />
  );
};

export default AuthForm;
