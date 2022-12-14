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
import {
  deleteToDo,
  getToDo,
  markDoneToDo,
  markUnDoneToDo,
  ToDoProps,
} from "../../services/getToDo";

type ToDoListProps = {
  listData: { id: number; done: boolean; body: string }[];
  setListItem: (listItem: { id: number; done: boolean; body: string }) => void;
  setToDoList: (res: ToDoProps) => void;
};

const ToDoList = observer(
  ({ listData, setListItem, setToDoList }: ToDoListProps) => {
    const onClickMarkElement = (id: number, done: boolean) => {
      done
        ? markUnDoneToDo(id).then(() => {
            getToDo().then((res) => {
              setToDoList(res);
            });
          })
        : markDoneToDo(id).then(() => {
            getToDo().then((res) => {
              setToDoList(res);
            });
          });
    };
    const onClickDeleteElement = (id: number) => {
      deleteToDo(id).then(() => {
        getToDo().then((res) => {
          setToDoList(res);
        });
      });
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
                <ListItemText id={id.toString()} primary={`${body}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }
);

export default ToDoList;
