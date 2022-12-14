import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getToDoFilters } from "../../services/getToDo";

type ToDoFilterSelectProps = {
  onChangeFilter: (filter: getToDoFilters) => void;
  filter: getToDoFilters;
};

const ToDoFilterSelect = ({
  onChangeFilter,
  filter,
}: ToDoFilterSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChangeFilter({ doneStatus: event.target.value } as getToDoFilters);
  };

  return (
    <Box minWidth={200}>
      <FormControl size="small" fullWidth>
        <InputLabel id="selectFilter">Фильтр</InputLabel>
        <Select
          labelId="selectFilter"
          value={filter.doneStatus}
          label="Фильтр"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>все</MenuItem>
          <MenuItem value={"done"}>выполненные</MenuItem>
          <MenuItem value={"undone"}>не выполненные</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ToDoFilterSelect;
