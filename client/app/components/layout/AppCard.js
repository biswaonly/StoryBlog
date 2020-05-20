import React, { Fragment, useState } from "react";
import { get } from "lodash";
import clsx from "clsx";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  Typography
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  top: { marginBottom: 10 },
  root: { maxWidth: 345 },
  header: { backgroundColor: theme.palette.primary.light },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: { transform: "rotate(180deg)" },
  adjust: { lineHeight: "20px" },
  boldFont: { fontWeight: "bold" }
}));

const IconInfo = ({ icon, tag }) => {
  const classes = useStyles();
  const IconName = icon;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}>
        <IconName fontSize="small" />
      </Grid>
      <Grid item xs={10}>
        <Typography className={classes.adjust}>{tag}</Typography>
      </Grid>
    </Grid>
  );
};

const CollapsedInfo = ({ point, tag }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        <Typography className={classes.boldFont}>
          {point} <span>:</span>
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography>{tag}</Typography>
      </Grid>
    </Grid>
  );
};

const AppCard = ({
  item,
  title,
  cardContent,
  cardActions,
  collapseContent,
  icon,
  func
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const HeaderIcon = icon;

  return (
    <Card className={clsx(classes.root, classes.top)}>
      <CardHeader
        className={classes.header}
        title={item[title]}
        action={
          icon && (
            <IconButton aria-label="settings" onClick={e => func(e, item)}>
              <HeaderIcon />
            </IconButton>
          )
        }
      />
      <CardContent>
        {cardContent.map((e, i) => {
          return e.point ? (
            <CollapsedInfo
              key={i}
              point={e.point}
              tag={get(item, e.tag, "-")}
            />
          ) : (
            <IconInfo key={i} icon={e.icon} tag={get(item, e.tag)} />
          );
        })}
      </CardContent>
      {cardActions.isVisible && (
        <Fragment>
          <CardActions disableSpacing>
            {cardActions.actionButtons.map((e, i) => {
              const IconName = e.icon;
              return (
                <div onClick={() => e.func(item)} key={i}>
                  <IconName icon={e.icon} />
                </div>
              );
            })}
            {cardActions.expandable && (
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMore />
              </IconButton>
            )}
          </CardActions>
          {cardActions.expandable && (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {collapseContent.map(
                  (e, i) =>
                    item[e.tag] !== undefined &&
                    item[e.tag] !== "" && (
                      <CollapsedInfo
                        key={i}
                        point={e.point}
                        tag={item[e.tag]}
                      />
                    )
                )}
              </CardContent>
            </Collapse>
          )}
        </Fragment>
      )}
    </Card>
  );
};

export default AppCard;
