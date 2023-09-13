import Tile from "../components/Tile";

const AppContainer = () => {
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

export default AppContainer;
