import { Box, Typography } from "@mui/material";
import Tile from "../Tile";

const Carousel = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "10px",
          padding: "30px",
          backgroundColor: "#f0f0f0",
          borderRadius: "20px",
          boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4">Application</Typography>
        <Box
          sx={{
            overflow: "auto",
            marginTop: "20px",
            display: "flex",
          }}
        >
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </Box>
      </div>
    </>
  );
};

export default Carousel;
