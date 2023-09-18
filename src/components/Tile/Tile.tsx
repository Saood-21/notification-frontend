import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Options from "../Options/Options";
import styles from "./Tile.module.css";
import { useState } from "react";

interface Props {
  appObject: {
    id: number;
    name: string;
    description: string;
    created_at: string;
    created_by: string;
    updated_by: string;
    is_valid: boolean;
  };
}

export default function Tile({appObject}:Props) {
  const [appTileInfo,setAppTileInfo] = useState(appObject)



  return (
    <div
      style={{
        width: "300px",
        flexShrink: 0,
        marginRight: "10px",
        marginBottom: "10px",
      }}
      onClick={()=>console.log("yoooooooooo")}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {appTileInfo.name}
          </Typography>
          <Typography className={styles.description}>{appTileInfo.description}</Typography>
        </CardContent>
        <CardActions>
          <Options />
        </CardActions>
      </Card>
    </div>
  );
}
