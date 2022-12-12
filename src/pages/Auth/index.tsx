import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import AuthForm from "../../components/AuthForm";
import { auth } from "../../services/auth";

const Auth = () => {

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
          <AuthForm onSubmit={auth} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Auth;
