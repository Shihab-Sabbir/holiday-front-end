"use client"
import React, { useState } from 'react';
import { Avatar, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useLogOutMutation } from '@/redux/api/auth/authApi';

const ProfileDropDown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logout] = useLogOutMutation();

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Typography variant="body1">Hello, Traveler</Typography>
        <Avatar src="avatar.jpg" alt="User Avatar" />
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileDropDown;
