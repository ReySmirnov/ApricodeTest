import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ToDoList from "../../components/ToDoList";
import {getToDo} from "../../services/getToDo";
import { observer } from "mobx-react-lite";
import { ToDoData } from "../../components/ToDoListContext";
import AddToDoPopover from "../../components/AddToDoPoppover";
import ToDoFilterSelect from "../../components/ToDoFilterSelect";

const ToDoListPage = observer(() => {
  const { setToDoList, toDoListData, setCurrentFilter, toDoListFilter } = useContext(ToDoData);

  const handleToDoAdd = () => {
    getToDo().then((res) => {
      setToDoList(res);
    });
  };

  useEffect(() => {
    getToDo(toDoListFilter).then((res) => {
      setToDoList(res);
    });
  }, [toDoListFilter]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      justifyContent="center"
    >
      <Paper elevation={10}>
        <Box p={3} maxWidth={600} minWidth={400} minHeight={200}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="flex-end"
            >
              <Typography variant="h5" textAlign="center">
                Список задач
              </Typography>
              <Box>
                <ToDoFilterSelect onChangeFilter={setCurrentFilter} filter={toDoListFilter} />
              </Box>
            </Box>
            <Box minHeight={200}>
              {toDoListData ? (
                <ToDoList listData={toDoListData} setToDoList={setToDoList} />
              ) : (
                <CircularProgress />
              )}
            </Box>
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
