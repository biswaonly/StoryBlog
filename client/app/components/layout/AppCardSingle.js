import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: { display: "flex", justifyContent: "space-between", marginBottom: 10 },
  font: { lineHeight: "48px", fontWeight: 600, paddingLeft: 12 },
  list: { maxWidth: 345 },
  boldFont: { fontWeight: "bold" },
  expandArea: { marginLeft: 10, marginBottom: 10 }
});

const AppCardSingle = ({ title, icon, func, item }) => {
  const classes = useStyles();

  const HeaderIcon = icon;
  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h6" className={classes.font}>
        {item[title]}
      </Typography>

      {icon && (
        <IconButton aria-label="settings" onClick={e => func(e, item)}>
          <HeaderIcon />
        </IconButton>
      )}
    </Paper>
  );
};

export default AppCardSingle;
