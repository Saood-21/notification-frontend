import { Box, Grid, Typography } from "@mui/material";
import Tile from "../Tile";
import CreateForm from "../CreateForm/CreateForm";
import NotificationTemplateContainer from "../../containers/NotificationTemplateContainer";
import SearchBar from "../SearchBar/SearchBar";

interface itemData {
  id: number;
  application_id?: number;
  event_id?: number;
  name: string;
  description: string;
  created_at: string;
  created_by: string;
  updated_by: string;
  is_valid: boolean;
}

interface Props {
  entity: string;
  getItems: () => void;
  onSelect?: (id: number) => void;
  onAdd: (appInfo: { name: string; description: string;}) => void;
  items: {
    pageNumber: number;
    pageSize: number;
    count: number;
    data: itemData[];
  };
}

const Carousel = ({ entity, items, onAdd, onSelect, getItems }: Props) => {
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
            <Typography variant="h4">{entity}</Typography>
          </Grid>
          {/* <Grid item xs={7}>
            <SearchBar/>
          </Grid> */}

          <Grid container xs={1} justifyContent="flex-end" alignItems="center">
            {entity==="Notifications"?<NotificationTemplateContainer/>:<CreateForm onAdd={onAdd}></CreateForm>}
          </Grid>
        </Grid>

        <Box
          sx={{
            overflow: "auto",
            marginTop: "20px",
            display: "flex",
          }}
        >
          {items.data.map((item) => (
            <Tile onSelect={onSelect} getItems={getItems} key={item.id} itemObject={item} />
          ))}
        </Box>
      </div>
    </>
  );
};

export default Carousel;
