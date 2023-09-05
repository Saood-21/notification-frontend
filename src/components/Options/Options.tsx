import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import './Options.css';

export default function OptionsBar() {
  const [circleActive, setCircleActive] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleCircleClick = () => {
    setCircleActive(!circleActive);
  };

  const handleEditMouseEnter = () => {
    setShowEdit(true);
  };

  const handleEditMouseLeave = () => {
    setShowEdit(false);
  };

  const handleDeleteMouseEnter = () => {
    setShowDelete(true);
  };

  const handleDeleteMouseLeave = () => {
    setShowDelete(false);
  };

  return (
    <div className="options-bar">
      <div className={`circle ${circleActive ? 'active' : ''}`} onClick={handleCircleClick} />

      <IconButton className="icon-button" onMouseEnter={handleEditMouseEnter} onMouseLeave={handleEditMouseLeave}>
        <Edit className="edit-icon" />
        {showEdit && <span className="edit-text">Edit</span>}
        <span className="sr-only">Edit</span>
      </IconButton>

      <IconButton className="icon-button" onMouseEnter={handleDeleteMouseEnter} onMouseLeave={handleDeleteMouseLeave}>
        <Delete className="delete-icon" />
        {showDelete && <span className="delete-text">Delete</span>}
        <span className="sr-only">Delete</span>
      </IconButton>
    </div>
  );
}
