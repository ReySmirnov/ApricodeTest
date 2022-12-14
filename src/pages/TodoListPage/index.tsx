import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ToDoList from "../../components/ToDoList";
import { getToDo } from "../../services/getToDo";
import { observer } from "mobx-react-lite";
import { ToDoData } from "../../components/ToDoListContext";
import AddToDoPopover from "../../components/AddToDoPoppover";

const ToDoListPage = observer(() => {
  const { setToDoList, toDoListData } = useContext(ToDoData);

  const handleToDoAdd = () => {
    getToDo().then((res) => {
      setToDoList(res);
    });
  };

  useEffect(() => {
    getToDo().then((res) => {
      setToDoList(res);
    });
  }, []);

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
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h5" textAlign="center">
              Список задач
            </Typography>
            {toDoListData ? (
              <ToDoList listData={toDoListData} setToDoList={setToDoList} />
            ) : (
              <CircularProgress />
            )}
            <Box textAlign="center">
              <AddToDoPopover onToDoAdd={handleToDoAdd} />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
});

export default ToDoListPage;
