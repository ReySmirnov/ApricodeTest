import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type ToDoListProps = {
  listData: { id: number; done: boolean; body: string }[];
};

const ToDoList = ({ listData }: ToDoListProps) => {
  const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => () => {
    const isCheckedIndex = checkedIndexes.includes(index);
    const newChecked = [...checkedIndexes];

    if (!isCheckedIndex) {
      newChecked.push(index);
    } else {
      newChecked.splice(newChecked.indexOf(index), 1);
    }

    setCheckedIndexes(newChecked);
  };

  return (
    <List>
      {listData.map(({ id, done, body }, index) => {
        return (
          <ListItem
            key={id}
            dense
            secondaryAction={
              <IconButton edge="end">
                <DeleteForeverIcon />
              </IconButton>
            }
          >
            <ListItemButton onClick={handleToggle(index)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={done}
                />
              </ListItemIcon>
              <ListItemText id={id.toString()} primary={`${body}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ToDoList;
