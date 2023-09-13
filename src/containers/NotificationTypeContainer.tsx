import React from 'react'
import Tile from "../components/Tile";

const NotificationTypeContainer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          width: "100%",
          whiteSpace: "nowrap",
        }}
      >
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
      </div>
    </>
  );
};

export default NotificationTypeContainer