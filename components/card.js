import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import orange from "@material-ui/core/colors/orange";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 150,
    backgroundColor: grey[700],
    borderLeft: "3px solid",
    borderLeftColor: orange[500],
    padding: "2px 2px 2px 5px",
    
    color: grey[300],
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
  },
  description: {
    fontSize: 11,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>Ashley Simmon</Typography>
      <Typography className={classes.description}>CARDIAC SURGERY</Typography>
    </Card>
  );
}
