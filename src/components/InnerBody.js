import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {getVegatableList} from '../util/apiLogic';
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

class InnerBody extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      "vegetableList": []
    };
  }
  async componentDidMount() {
    // load data from apiUrl
    try {
      let vegetableList = await getVegatableList({prevFetchNum:10});
      this.setState({vegetableList: vegetableList});
    } catch (e) {
      console.log(`[getVegatableList] error :`, e.toString());
    }
  }
  renderVegatables = () => {
    let {vegetableList} = this.state;
    const {classes} = this.props;
    return (vegetableList.map((ctx, index) => (
      <Grid key={index} item xs={3} className={classes.gridMargin}>
        <Paper className={classes.root}>
          <Link to={{pathname:"/content", state:{...ctx}}}>
            <img className={classes.img} src={ctx.cover} />
            <Typography component="p" className={classes.p}>
              {ctx.common_names_zh}
            </Typography>
          </Link>
        </Paper>
      </Grid>
    )));
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          spacing={24}
          direction="row"
          alignItems="center"
          justify="center"
        >
          {this.renderVegatables()}
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
}

InnerBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InnerBody);
