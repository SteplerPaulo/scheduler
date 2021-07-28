import React, { Fragment, useState } from "react";
import grey from "@material-ui/core/colors/grey";
import orange from "@material-ui/core/colors/orange";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CreateIcon from "@material-ui/icons/Create";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import RoomIcon from "@material-ui/icons/Room";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TimerIcon from "@material-ui/icons/Timer";
import theme from "../src/theme";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  palette: {
    backgroundColor: "transparent",
  },
  tabBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid",
    borderBottomColor: grey[500],
  },
  badge: {
    backgroundColor: grey[700],
    padding: 2,
  },
  badgeWarning: {
    backgroundColor: orange[700],
    padding: 2,
  },
  listItem: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Appointment" {...a11yProps(0)} />
          <Tab disabled label="Consultation" {...a11yProps(1)} />
          <Tab disabled label="Invoice" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText
              primary="1.PreOp Consult"
              secondary="LINKED TO 3 APPTS OF OPERATION"
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>

            <ListItemText
              primary="Dr. Sherry White"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    CONSULTATION &#8226; MEDICARE
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    REFERRED BY DR. HENRY WILLIAMS
                  </Typography>

                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                    className={classes.badgeWarning}
                  >
                    21 Days
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary="Sydney  &#8226; Tulip" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText
              primary="08 Mar &#8226; 10:30AM &#8226; 15mins"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                    className={classes.badge}
                  >
                    ON WAITLIST
                  </Typography>{" "}
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                    className={classes.badge}
                  >
                    RECURRING
                  </Typography>
                  {" 21 Days"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem  className={classes.listItem}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="A shot of painkiller was given to patient before consultation" />
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
