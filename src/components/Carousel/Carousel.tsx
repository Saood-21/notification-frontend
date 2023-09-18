import { Box, Grid, Typography } from "@mui/material";
import Tile from "../Tile";
import CreateForm from "../CreateForm/CreateForm";

interface appData {
  id: number;
  name: string;
  description: string;
  created_at: string;
  created_by: string;
  updated_by: string;
  is_valid: boolean;
}

interface Props {
  onAdd: (appInfo:{name:string, description:string}) => void
  apps: {
    pageNumber: number;
    pageSize: number;
    count: number;
    data: appData[];
  };
}

const Carousel = ({ apps, onAdd }: Props) => {
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
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item xs={11}>
            <Typography variant="h4">Application</Typography>
          </Grid>
          <Grid container xs={1} justifyContent="flex-end" alignItems="center">
            <CreateForm onAdd={onAdd}></CreateForm>
          </Grid>
        </Grid>
        <Box
          sx={{
            overflow: "auto",
            marginTop: "20px",
            display: "flex",
          }}
        >
          {apps.data.map((app) => (
            <Tile key={app.id} appObject={app} />
          ))}
        </Box>
      </div>
    </>
  );
};

export default Carousel;
