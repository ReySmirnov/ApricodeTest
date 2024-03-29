import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { observer } from "mobx-react-lite";
import { deleteToDo, setToDoStatus } from "../../services/getToDo";
import { Typography } from "@mui/material";

type ToDoListProps = {
  listData: { id: number; done: boolean; body: string }[];
  onStatusChanged: () => void;
  onDeletedElement: () => void;
};

const ToDoList = observer(
  ({ listData, onDeletedElement, onStatusChanged }: ToDoListProps) => {
    const onClickMarkElement = (id: number, done: boolean) => {
      setToDoStatus(id, done).then(onStatusChanged);
    };
    const onClickDeleteElement = (id: number) => {
      deleteToDo(id).then(onDeletedElement);
    };

    return (
      <List>
        {listData.map(({ id, done, body }) => {
          return (
            <ListItem
              key={id}
              dense
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => {
                    onClickDeleteElement(id);
                  }}
                >
                  <DeleteForeverIcon />
                </IconButton>
              }
            >
              <ListItemButton
                onClick={() => {
                  onClickMarkElement(id, done);
                }}
              >
                <ListItemIcon>
                  <Checkbox edge="start" checked={done} />
                </ListItemIcon>
                <ListItemText id={id.toString()}>
                  <Typography variant="body1">{body}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }
);

export default ToDoList;
