import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SubNav from "./SubNav";
import { getVegatableList } from "../util/apiLogic";
import { observer } from "mobx-react";
import Chart from "./Chart";

const styles = {
  root: {
    padding: "1%",
    marginTop: "5px",
    width: "100%",
    display: "flex",
    flexGrow: 1
  },

  img: {
    minHeight: "80%",
    maxHeight: "80%",
    minWidth: "100%",
    maxWidth: "100%",
    alignSelf: "center"
  },
  p: {
    textAlign: "center",
    padding: "5%"
  }
};

class InnerBody extends Component {
  async componentDidMount() {
    // load data from apiUrl
    try {
      console.log(`itemList chagne loading status`);
      this.props.store.setLoadingState(true);
      let vegetableList = await getVegatableList({ numToFetch: 200 });
      // this.setState({vegetableList: vegetableList});
      this.props.store.updateList(vegetableList);
      console.log(`[itemlist]`, this.props.store.itemlist);
    } catch (e) {
      console.log(`[getVegatableList] error :`, e.toString());
    } finally {
      this.props.store.setLoadingState(false);
      console.log(`itemList chagne loading status end`);
      console.log(`item list `, this.props.store.loading);
    }
  }
  renderVegatables = () => {
    let { itemlist } = this.props.store;
    const { classes } = this.props;
    return itemlist.map((ctx, index) => (
      <Grid item xs={6} sm={4} md={3} key={index}>
        <Paper>
          <Link to={{ pathname: "/content", state: { ...ctx } }}>
            <img
              className={classes.img}
              src={ctx.cover}
              alt={`${ctx.common_names_zh}`}
            />
            <Typography component="p" className={classes.p}>
              {ctx.common_names_zh}
            </Typography>
          </Link>
        </Paper>
      </Grid>
    ));
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.store.setLoadingState(false);
  };

  state = {
    value: 0
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <SubNav />
        <div className={classes.root}>
          <Paper>
            <AppBar position="static">
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={this.handleChange}
              >
                <Tab label="植物列表" style={{ width: "45vw" }} />
                <Tab label="食物的營養" style={{ width: "45vw" }} />
              </Tabs>
            </AppBar>
            {value === 0 && (
              <Grid container spacing={8} style={{ marginTop: "5px" }}>
                {this.renderVegatables()}
              </Grid>
            )}
            {value === 1 && <Chart />}
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

InnerBody.propTypes = {
  classes: PropTypes.object.isRequired
};
InnerBody = observer(InnerBody);
export default withStyles(styles)(InnerBody);
