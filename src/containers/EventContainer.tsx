import React from 'react'
import Tile from "../components/Tile";

const EventContainer = () => {
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

export default EventContainer