import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Options from "../Options/Options";
import apiClient from "../../services/api-client";

import styles from "./Tile.module.css";
import { useState } from "react";

interface Props {
  getItems: () => void;
  appObject: {
    id: number;
    app_id?: number;
    event_id?: number;
    name: string;
    description: string;
    created_at: string;
    created_by: string;
    updated_by: string;
    is_valid: boolean;
  };
}

export default function Tile({ appObject, getItems }: Props) {
  const [appTileInfo, setAppTileInfo] = useState(appObject);
  let route;
  const deleteItem = () => {
    if (appObject.event_id) {
      route = `notification/${appObject.id}`;
    } else if (appObject.app_id) {
      route = `event/${appObject.id}`;
    } else {
      route = `application/${appObject.id}`;
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

  return (
    <div
      style={{
        width: "300px",
        flexShrink: 0,
        marginRight: "10px",
        marginBottom: "10px",
      }}
      onClick={() => console.log("yoooooooooo")}
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
