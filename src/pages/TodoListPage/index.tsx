import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ToDoList from "../../components/ToDoList";

let listData = [
  { id: 0, done: true, body: "ToDo" },
  { id: 1, done: false, body: "ToDo" },
  { id: 2, done: true, body: "ToDo" },
  { id: 3, done: true, body: "ToDo" },
  { id: 4, done: true, body: "ToDo" },
];

const ToDoListPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      justifyContent="center"
    >
      <Paper elevation={10}>
        <Box p={3} maxWidth={500} minWidth={300}>
          <Box>
            <Typography variant="h5" textAlign="center">
              To Do List
            </Typography>
            <ToDoList listData={listData} />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ToDoListPage;
