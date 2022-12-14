import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DoneStatus } from "../../services/getToDo";
import { Typography } from "@mui/material";

type ToDoFilterSelectProps = {
  onChangeStatus: (status: DoneStatus) => void;
  status?: DoneStatus;
};

const selectOptions: { value: DoneStatus; label: string }[] = [
  {
    value: "all",
    label: "все",
  },
  {
    value: "done",
    label: "выполненные",
  },
  {
    value: "undone",
    label: "не выполненные",
  },
];

const ToDoFilterSelect = ({
  onChangeStatus,
  status = 'all',
}: ToDoFilterSelectProps) => {
  const handleChange = (event: SelectChangeEvent<DoneStatus>) => {
    onChangeStatus(event.target.value as DoneStatus);
  };

  return (
    <Box minWidth={200}>
      <FormControl size="small" fullWidth>
        <InputLabel id="selectFilter">Фильтр</InputLabel>
        <Select<DoneStatus>
          labelId="selectFilter"
          value={status}
          label="Фильтр"
          onChange={handleChange}
        >
          {selectOptions.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              <Typography>{label}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ToDoFilterSelect;
