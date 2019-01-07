import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    zIndex: 10,
    flexGrow: 1
  },
  toolbar: {
    marginLeft: "30%",
    width: "100%"
  },
  button: {
    margin: "0",
    padding: "10%",
    color: "white"
  },
  bg: {
    background: "green"
  },
  input: {
    display: "none"
  }
};

function SubNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.bg}>
        <Toolbar>
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Button className={classes.button}>September</Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.button}>October</Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.button}>November</Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.button}>December</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SubNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubNav);
