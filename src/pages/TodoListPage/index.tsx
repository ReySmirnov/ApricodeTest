import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ToDoList from "../../components/ToDoList";
import { DoneStatus, getToDo } from "../../services/getToDo";
import { observer } from "mobx-react-lite";
import { ToDoData } from "../../components/ToDoListContext";
import AddToDoPopover from "../../components/AddToDoPoppover";
import ToDoFilterSelect from "../../components/ToDoFilterSelect";

const ToDoListPage = observer(() => {
  const { setToDoList, toDoListData, setCurrentFilter, toDoListFilter } =
    useContext(ToDoData);

  const handleChangeStatus = (status: DoneStatus) => {
    setCurrentFilter({ doneStatus: status });
  };

  const handleToDoAdded = () => {
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
        <Box py={3} px={1} maxWidth={600} minWidth={400} minHeight={300}>
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
                <ToDoFilterSelect
                  onChangeStatus={handleChangeStatus}
                  status={toDoListFilter.doneStatus}
                />
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
              <AddToDoPopover onToDoAdded={handleToDoAdded} />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
});

export default ToDoListPage;
