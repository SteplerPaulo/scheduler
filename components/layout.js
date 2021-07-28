import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import EventNoteIcon from "@material-ui/icons/EventNote";
import AssessmentIcon from "@material-ui/icons/Assessment";
import GroupIcon from "@material-ui/icons/Group";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import AssignmentIcon from "@material-ui/icons/Assignment";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import LiveClock from "./clock";
import Clock from 'react-live-clock';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    background: {
      opacity: 0.7,
      default: "#080808",
    },
  },
  drawerClose: {
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  avatar: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: grey[900],
      color: grey[200],
    },
  },
  appBarInput: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[800],
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  appBarButton: {
    marginRight: theme.spacing(1),
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [client, setClient] = useState({ title: "Sydney Clinic" });

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeClientHandler = (event, newValue) => {
    setClient(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: open })}
      >
        <Toolbar>
          <div className={classes.avatar}>
            <Avatar>SC</Avatar>
          </div>
          <Autocomplete
            id="clients"
            options={clients}
            getOptionLabel={(option) => option.title}
            getOptionSelected={(option, value) => option.title === value.title}
            defaultValue={client}
            onChange={changeClientHandler}
            style={{ width: 200 }}
            size="small"
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
          <TextField
            id="tab-active"
            select
            value="5"
            variant="outlined"
            size="small"
            className={classes.appBarInput}
          >
            <MenuItem value="5">5 Tabs Active</MenuItem>
            <MenuItem value="10">10 Tabs Active</MenuItem>
            <MenuItem value="20">20 Tabs Active</MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="secondary"
            className={classes.appBarButton}
          >
            <AddIcon />
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.appBarButton}
          >
            <SearchIcon />
          </Button>

          <div className={classes.grow} />
          <IconButton aria-label="show 4 new mails" color="inherit">
            <AccessTimeIcon />
          </IconButton>
          <LiveClock/>

          <Divider orientation="vertical" flexItem variant="middle" />
          {appBarRoutes.map((prop,index) => (
            <IconButton key={index} color="inherit">
              <prop.icon />
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawerPaper, { [classes.drawerClose]: !open })}
        classes={{ paper: clsx({ [classes.drawerClose]: !open }) }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {sideRoutes.map((prop) => (
            <ListItem button key={prop.name} component={Link} href={`${prop.path}`}> 
              <ListItemIcon>
                <prop.icon />
              </ListItemIcon>
              <ListItemText primary={prop.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

const clients = [
  { title: "Sydney Clinic" },
  { title: "Royal Melbourne Hospital" },
];

const sideRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: AssessmentIcon,
  },
  {
    path: "/scheduler",
    name: "Scheduler",
    icon: EventNoteIcon,
  },
  {
    path: "/users",
    name: "Users",
    icon: GroupIcon,
  },
  {
    path: "/email",
    name: "Email",
    icon: EmailIcon,
  },
  {
    path: "/files",
    name: "files",
    icon: DescriptionIcon,
  },
  {
    path: "/setting",
    name: "Setting",
    icon: SettingsIcon,
  },
];

const appBarRoutes = [
  {
    icon: Brightness5Icon,
  },

  {
    icon: AssignmentIcon,
  },
  {
    icon: NotificationsIcon,
  },
  {
    icon: AccountCircleIcon,
  },
];
