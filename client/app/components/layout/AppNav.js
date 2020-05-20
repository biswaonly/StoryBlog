import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@material-ui/core";
import {
  MoveToInbox,
  Mail,
  Menu,
  AccountCircle,
  NotificationsActive
} from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import logo from "../../data/img/ipl.png";
import HomeRoute from "../../routes/HomeRoute";
import DropMenu from "./DropMenu";
import AppModal from "./AppModal";

const drawerWidth = 240;

const notificationDropArr = [
  { element: "Notification", path: "/notification" }
];

const arrNav = [
  "Transporter",
  "Vehicle",
  "Material Vendor",
  "Material",
  "Zone"
];

const useStyles = makeStyles(theme => ({
  root: { display: "flex" },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: theme.palette.primary.white
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  topButton: {
    color: theme.palette.primary.white,
    [theme.breakpoints.up("sm")]: {
      color: theme.palette.primary.dark
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.primary.main
  },
  upperSpace: theme.mixins.toolbar,
  logo: { height: 35 },
  logoWrapper: { margin: "auto", width: 35, paddingTop: 18 },
  drawerPaper: { width: drawerWidth },
  content: { flexGrow: 1, padding: theme.spacing(3) },
  space: { flex: 1 }
}));

const AppNav = ({ history, context }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

  const userDropArr = [
    { element: "Change Password", path: "/changePassword" },
    { element: "Sign Out", path: false, func: () => context.signout() }
  ];

  useEffect(() => {
    if (context.isAuthenticated) {
      context.getAllTransporter();
      context.getAllZones();
      context.getAllMaterials();
      context.getAllMaterialPartner();
    }
  }, [context.isAuthenticated]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleRoute = param => {
    setMobileOpen(false);
    if (param === "Material Vendor") {
      history.push("/materialVendor");
    } else if (param === "Transporter") {
      history.push("/");
    } else {
      history.push(`/${param.toLowerCase()}`);
    }
  };

  const handleUser = event => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleNotification = event => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const drawer = (
    <Fragment>
      <div className={classes.toolbar}>
        <div className={classes.logoWrapper}>
          <img alt="IPL" src={logo} className={classes.logo} />
        </div>
      </div>
      <Divider />
      <List>
        {arrNav.map((text, index) => (
          <ListItem button key={text} onClick={() => handleRoute(text)}>
            <ListItemIcon>
              {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <div className={classes.space} />
          <IconButton
            className={classes.topButton}
            onClick={handleNotification}
          >
            <NotificationsActive fontSize="large" />
          </IconButton>
          <DropMenu
            arrItem={notificationDropArr}
            anchorEl={notificationAnchorEl}
            setAnchorEl={setNotificationAnchorEl}
            history={history}
          />
          <IconButton
            className={classes.topButton}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleUser}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <DropMenu
            arrItem={userDropArr}
            anchorEl={userAnchorEl}
            setAnchorEl={setUserAnchorEl}
            history={history}
          />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.upperSpace} />
        {context.modalOpen && <AppModal />}
        <HomeRoute />
      </main>
    </div>
  );
};

export default withRouter(AppNav);
