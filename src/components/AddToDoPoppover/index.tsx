import React, { useRef, useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import PopoverContent from "./PopoverContent";

type AddToDoPopover = { onToDoAdded: () => void };

const AddToDoPopover = ({ onToDoAdded }: AddToDoPopover) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const anchorEl = useRef(null);

  const handleToDoAdded = () => {
    onToDoAdded();
    setIsOpen(false);
  };

  return (
    <Box>
      <Button
        ref={anchorEl}
        variant="contained"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Typography variant="body1">добавить задачу</Typography>
      </Button>
      <Popover
        open={isOpen}
        anchorEl={anchorEl.current}
        onClose={() => {
          setIsOpen(false);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <PopoverContent onToDoAdded={handleToDoAdded} />
      </Popover>
    </Box>
  );
};

export default AddToDoPopover;
