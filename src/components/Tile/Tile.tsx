import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Options from '../Options/Options';
import styles from './Tile.module.css';

export default function Tile() {
  return (
    <Card className = { styles.card }  >
      <CardContent>
        <Typography variant="h5" component="div">
          Heading
        </Typography>
        <Typography className= { styles.description }>
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Options/>
      </CardActions>
    </Card>
  );
}
