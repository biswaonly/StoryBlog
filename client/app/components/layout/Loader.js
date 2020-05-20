import React, { Fragment, useState, useEffect } from "react";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: { width: "auto", marginTop: 10, marginBottom: 10 }
});

const Loader = ({ repeat }) => {
  const classes = useStyles();
  const [state, setState] = useState([]);

  useEffect(() => {
    let a = repeat ? new Array(repeat).fill(1) : new Array(3).fill(1);
    setState([...a]);
  }, []);

  return (
    <Fragment>
      {state.map((e, i) => (
        <div className={classes.root} key={i}>
          <Skeleton animation={false} height={62} />
          <Skeleton animation="wave" variant="rect" height={142} />
        </div>
      ))}
    </Fragment>
  );
};

export default Loader;
