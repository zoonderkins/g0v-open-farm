import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const vegetablesImage = [
  {
    title: "tomato",
    image: "https://sciencebob.com/wp-content/uploads/2015/04/tomato_small.png"
  },
  {
    title: "tomato",
    image: "https://sciencebob.com/wp-content/uploads/2015/04/tomato_small.png"
  },
  {
    title: "tomato",
    image: "https://sciencebob.com/wp-content/uploads/2015/04/tomato_small.png"
  }
];
const styles = {
  root: {
    overflow: "hidden",
    margin: "10%",
    width: "100%"
  },
  gridMargin: {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px",
    maxWidth: 380,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    margin: "0",
    padding: "10px",
    width: "auto",
    maxHeight: "180px",
    alignSelf: "center"
  },
  p: {
    textAlign: "center"
  }
};

function InnerBody(props) {
  const { classes } = props;

  return (
    <div>
      <Grid
        container
        spacing={24}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {vegetablesImage.map((ctx, index) => (
          <Grid item xs={3} className={classes.gridMargin}>
            <Paper className={classes.root}>
              <Link to="/content">
                <img className={classes.img} src={ctx.image} />
                <Typography component="p" className={classes.p}>
                  {ctx.title}
                </Typography>
              </Link>
            </Paper>
          </Grid>
        ))}
        {/* <Grid item xs={3} className={classes.gridMargin}>
          <Paper className={classes.root} elevation={1}>
            <img className={classes.img} src={vegetablesImage.tomato} />
            <Typography component="p" className={classes.p}>
              This is a tomato
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.gridMargin}>
          <Paper className={classes.root} elevation={1}>
            <img className={classes.img} src={vegetablesImage.tomato} />
            <Typography component="p" className={classes.p}>
              This is a tomato
            </Typography>
          </Paper>
        </Grid>*/}
      </Grid>
    </div>
  );
}

InnerBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InnerBody);
