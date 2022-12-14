import { Box } from "@mui/material";
import React from "react";
import AddToDoForm from "./AddToDoForm";
import { addToDo } from "../../../services/getToDo";
import { observer } from "mobx-react-lite";
import { AxiosError } from "axios";

type PopoverContentProps = {
  onToDoAdd: () => void;
};

const PopoverContent = observer(({ onToDoAdd }: PopoverContentProps) => {
  const handleSubmit = (body: { inputToDo: string }) => {
    return addToDo(body)
      .then(() => {
        onToDoAdd();
      })
      .catch((err) => {
        if (err instanceof AxiosError && err.response?.status === 400) {
          return {
            inputToDo: "Пустое имя задачи.",
          };
        }
        throw err;
      });
  };

  return (
    <Box
      m={1}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <AddToDoForm onSubmit={handleSubmit} />
    </Box>
  );
});

export default PopoverContent;
