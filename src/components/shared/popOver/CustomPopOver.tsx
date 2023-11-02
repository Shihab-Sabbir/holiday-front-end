import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

interface BasicPopoverProps {
  content: React.ReactNode | string;
  buttonContent: React.ReactNode | string;
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

export default function CustomPopOver({
  content = "body content",
  buttonContent,
  anchorEl,
  setAnchorEl,
}: BasicPopoverProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button
        aria-describedby={id}
        className="text-start"
        onClick={handleClick}
      >
        {" "}
        {buttonContent}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 1 }}>{content}</Typography>
      </Popover>
    </div>
  );
}
