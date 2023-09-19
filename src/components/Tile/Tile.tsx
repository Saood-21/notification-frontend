import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Options from "../Options/Options";
import apiClient from "../../services/api-client";

import styles from "./Tile.module.css";
import { useState } from "react";

interface Props {
  onSelect?: (id: number) => void;
  getItems: () => void;
  itemObject: {
    id: number;
    application_id?: number;
    event_id?: number;
    name: string;
    description: string;
    created_at: string;
    created_by: string;
    updated_by: string;
    is_valid: boolean;
  };
}

export default function Tile({ itemObject, getItems, onSelect }: Props) {
  const [appTileInfo, setAppTileInfo] = useState(itemObject);

  let route;
  const deleteItem = () => {
    if (itemObject.event_id) {
      route = `notification/${itemObject.id}`;

    } else if (itemObject.application_id) {
      route = `event/${itemObject.id}`;
    } else {
      console.log(itemObject)

      route = `application/${itemObject.id}`;
    }

    apiClient
      .delete(route)
      .then(() => {
        console.log("deleted successfully");
        getItems();
      })
      .catch(() => {
        console.log("error in delete");
      });
  };

  const handleClick = () => {
    if (onSelect) {
      onSelect(itemObject.id);
      console.log(itemObject.id)
    }
    else{
      console.log("rrrrrrrrrrrrrrr")
    }
  };

  return (
    <div
      style={{
        width: "300px",
        flexShrink: 0,
        marginRight: "10px",
        marginBottom: "10px",
      }}
      onClick={() => {handleClick()}}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {appTileInfo.name}
          </Typography>
          <Typography className={styles.description}>
            {appTileInfo.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Options onDelete={deleteItem} />
        </CardActions>
      </Card>
    </div>
  );
}
