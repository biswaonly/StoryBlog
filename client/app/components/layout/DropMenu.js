import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ userSelect: { top: "44px !important" } });

const DropMenu = ({ arrItem, anchorEl, setAnchorEl, history }) => {
  const classes = useStyles();

  const handleClick = ele => {
    history.push(ele.path);
    setAnchorEl(null);
    !ele.path && ele.func();
  };

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      className={classes.userSelect}
    >
      {arrItem.map(e => (
        <MenuItem onClick={() => handleClick(e)} key={e.element}>
          {e.element}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropMenu;
