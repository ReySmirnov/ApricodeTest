import React, { useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import AuthForm, { FormValues } from "../../components/AuthForm";
import { auth } from "../../services/auth";
import { FORM_ERROR, SubmissionErrors } from "final-form";
import { AxiosError } from "axios";
import { Auth } from "../../components/AuthContext";
import { observer } from "mobx-react-lite";

const AuthPage = observer(() => {
  const { setUser } = useContext(Auth);

  const handleSubmit = (
    values: FormValues
  ): Promise<void | SubmissionErrors> => {
    return auth(values)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        if (err instanceof AxiosError && err.response?.status === 401) {
          return {
            [FORM_ERROR]: "Ошибка авторизации.\nНеверный логин или пароль",
          };
        }
        throw err;
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Paper elevation={10}>
        <Box p={2} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h5" textTransform="capitalize">
            авторизация
          </Typography>
          <AuthForm onSubmit={handleSubmit} />
        </Box>
      </Paper>
    </Box>
  );
});

export default AuthPage;
