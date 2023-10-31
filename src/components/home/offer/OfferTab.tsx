"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
      {value === index && (
        <Box sx={{ paddingY: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OfferTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyle = {textTransform:'none',fontSize:'14px'};

  return (
    <Box sx={{ width: "100%" }}>
      <div className="flex items-center w-full justify-between">
        <p className="text-[32px] font-bold">Offers</p>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={tabStyle} label="All Offers" {...a11yProps(0)} />
            <Tab sx={tabStyle} label="Flights" {...a11yProps(1)} />
            <Tab sx={tabStyle} label="Hotels" {...a11yProps(2)} />
            <Tab sx={tabStyle} label="Holidays" {...a11yProps(3)} />
            <Tab sx={tabStyle} label="Trains" {...a11yProps(4)} />
            <Tab sx={tabStyle} label="Buses" {...a11yProps(5)} />
            <Tab sx={tabStyle} label="Cabs" {...a11yProps(6)} />
          </Tabs>
        </Box>
        <p className="text-[16px] font-bold text-primary">VIEW ALL</p>
      </div>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
