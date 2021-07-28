import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SendIcon from "@material-ui/icons/Send";

import TabPanel from "../components/tabs";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SimplePopover(props) {
  const { anchorEl, setAnchorEl, date, time } = props;
  const classes = useStyles();


  const handleClose = () => {
    setAnchorEl(null);
  };



  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={classes.paper}>
          <Typography variant="h5" component="h1" id="transition-modal-title">
            Peter Meyers
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            id="transition-modal-description"
          >
            32Yrs &#8226; 0412345678
          </Typography>
          <TabPanel/>
          <Typography variant="body2" component="div">
            Reminder sent to patient on 23 Jan 9:13AM on 0412345678 &
            peter.meyers@gmail.com
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<EventAvailableIcon />}
          >
            Confirm
          </Button>
          <Button
            variant="contained"
            color="default"
            size="small"
            disabled
            className={classes.button}
            startIcon={<CheckCircleIcon />}
          >
            Checkin
          </Button>
          <Button
            variant="contained"
            color="default"
            size="small"
            disabled
            className={classes.button}
            startIcon={<SendIcon />}
          >
            Send to Doc
          </Button>
        </div>
      </Popover>
    </div>
  );
}
