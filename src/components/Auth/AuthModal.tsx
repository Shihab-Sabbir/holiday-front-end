"use client";

import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogContent, IconButton, Tab, Tabs } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Signin from "./Signin";
import Signup from "./Signup";
import SigninTest from "./SigninTest";

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default function AuthModal(props: SimpleDialogProps) {
  const { open, setOpen } = props;
  const [value, setValue] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const tabStyle = {
    fontSize: "14px",
    minHeight: "29px",
    padding: "0px",
    width:'50%'
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth 
    sx={{
        '.MuiPaper-root':{background:'transparent',padding:'40px',boxShadow:'none'}
    }}
    >
       <div className="!bg-white rounded-xl shadow-xl">
       <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          size="small"
          sx={{
            position: "absolute",
            background:'white !important',
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
          <div className="shadow-lg rounded-[30px] p-[7px] h-[42px]">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                ".MuiTabs-indicator": { height: "0" },
                ".Mui-selected": {
                  backgroundColor: "var(--color-primary)",
                  color: "white !important",
                  fontWeight: "bold",
                  borderRadius: "30px",
                },
              }}
            >
              <Tab sx={tabStyle} label="Sign in" {...a11yProps(0)} />
              <Tab sx={tabStyle} label="Sign up" {...a11yProps(1)} />
            </Tabs>
          </div>
        </DialogTitle>
      <DialogContent>
        <CustomTabPanel value={value} index={0}>
          <SigninTest />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Signup />
        </CustomTabPanel>
      </DialogContent>
       </div>
    </Dialog>
  );
}
