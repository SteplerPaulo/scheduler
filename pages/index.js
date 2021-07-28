import Head from "next/head";
import Layout from "../components/layout";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EventNoteIcon from "@material-ui/icons/EventNote";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Layout home>
      <Head>
        <title>Schedular</title>
      </Head>

      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h1">DASHBOARD</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
