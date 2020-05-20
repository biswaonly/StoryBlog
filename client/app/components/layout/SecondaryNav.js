import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase
} from "@material-ui/core";
import { ArrowBack, Search } from "@material-ui/icons";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  rootFixed: {
    boxSizing: "content-box",
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.primary.dark,
    top: 59
  },
  rootStatic: {
    boxSizing: "content-box",
    margin: "-21px -23px 10px",
    padding: "0 24px",
    backgroundColor: theme.palette.primary.dark
  },
  toolbar: { padding: 0 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    },
    margin: "0 8px !important"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: { color: "inherit" },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": { width: "20ch" }
    }
  }
}));

const BackBtn = ({ history }) => {
  const classes = useStyles();
  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={() => history.goBack()}
    >
      <ArrowBack />
    </IconButton>
  );
};

const ContentHeader = ({ header }) => {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.title}>
      {header}
    </Typography>
  );
};

const SearchBox = ({ func }) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Search />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={e => {
          func(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
};

const SecondaryNav = ({ appBar, history }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position={"fixed"} className={classes.rootFixed}>
        {appBar.map((e, i) => {
          const Component = e.component && e.component;
          return (
            <Toolbar key={i}>
              {e.backNav && <BackBtn history={history} />}
              {e.contentHeader && <ContentHeader header={e.contentHeader} />}
              {e.searchBox && e.searchBox.present && (
                <SearchBox func={val => e.searchBox.func(val)} />
              )}
              {e.component && <Component />}
              {e.btn !== undefined &&
                e.btn.length &&
                e.btn.map((ele, index) => {
                  const CustomBtn = ele.component;
                  return (
                    <div key={index} onClick={() => ele.func()}>
                      <CustomBtn />
                    </div>
                  );
                })}
            </Toolbar>
          );
        })}
      </AppBar>
      {appBar.map((e, i) => (
        <div style={{ height: "46px", marginBottom: "5px" }} key={i}></div>
      ))}
    </Fragment>
  );
};

export default withRouter(SecondaryNav);
