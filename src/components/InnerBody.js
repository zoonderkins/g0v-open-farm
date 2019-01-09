import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import SubNav from "./SubNav";
import { getVegatableList } from "../util/apiLogic";
import { observer } from "mobx-react";
const styles = {
  root: {
    padding: "1%",
    margin: "5px",
    overflow: "hidden",
    display: "inlineblock",
    maxHeight: "50vh",
    width: "auto"
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    margin: "2%",
    padding: "10px",
    height: "auto",
    flexWrap: "wrap"
  },
  gridMargin: {
    overflow: "hidden"
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
  },
  img: {
    maxHeight: "48vh",
    maxWidth: "100%",
    alignSelf: "center"
  },
  p: {
    textAlign: "center",
    padding: "3%"
  }
};

class InnerBody extends Component {
  async componentDidMount() {
    // load data from apiUrl
    try {
      let vegetableList = await getVegatableList({ numToFetch: 10 });
      // this.setState({vegetableList: vegetableList});
      this.props.store.updateList(vegetableList);
      console.log(`[itemlist]`, this.props.store.itemlist);
    } catch (e) {
      console.log(`[getVegatableList] error :`, e.toString());
    }
  }
  renderVegatables = () => {
    // let {vegetableList} = this.state;
    let { itemlist } = this.props.store;
    const { classes } = this.props;
    return itemlist.map((ctx, index) => (
      <Grid key={index} item xs={3} className={classes.root}>
        <Paper>
          <Link to={{ pathname: "/content", state: { ...ctx } }}>
            <img className={classes.img} src={ctx.cover} alt={`${ctx.common_names_zh}`}/>
            <Typography component="p" className={classes.p}>
              {ctx.common_names_zh}
            </Typography>
          </Link>
        </Paper>
      </Grid>
    ));
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <SubNav />
        <Grid
          container
          spacing={24}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <div className={classes.wrap}>{this.renderVegatables()}</div>
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
      </React.Fragment>
    );
  }
}

InnerBody.propTypes = {
  classes: PropTypes.object.isRequired
};
InnerBody = observer(InnerBody);
export default withStyles(styles)(InnerBody);
