import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FilterListIcon from "@material-ui/icons/FilterList";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ListIcon from '@material-ui/icons/List';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  grow: {
    flexGrow: 1,
  },
  buttonStartRadius:{
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buttonEndRadius:{
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        color="secondary"
        aria-label="contained primary button group"
      >
        <Button color="primary" startIcon={<AddIcon />} className={classes.buttonStartRadius}>
          New
        </Button>
        <Button color="secondary" startIcon={<AssignmentIcon />}>
          Waitlist
        </Button>
        <Button color="secondary" startIcon={<FilterListIcon />}>
          Filters
        </Button>
        <Button color="secondary" startIcon={<EventAvailableIcon />}>
          Today
        </Button>
        <Button color="secondary" startIcon={<EventNoteIcon />}>
          08 Mar 2020
        </Button>
        <div className={classes.grow} />
        <Button color="secondary" startIcon={<ListIcon />}>
          List
        </Button>
        <Button color="secondary" startIcon={<SettingsIcon />} className={classes.buttonEndRadius}>
          More Options
        </Button>
      </ButtonGroup>
    </div>
  );
}
