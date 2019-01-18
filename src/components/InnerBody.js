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
    marginTop: "5px",
    width: "100%"
  },
  p: {
    textAlign: "center",
    padding: "5%"
  },
  masonry: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
    // backgroundSize: "cover",
    alignItems: "center"
    // backgroundPosition: "center center"
  },
  img: {
    height: "170px",
    width: "100%",
    // maxHeight: "80%",
    objectFit: "cover"
    // minHeight: "200px"
  },
  chart: {
    height: "100vw",
    maxHeight: "50vh"
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
      <Grid item xs={6} sm={4} md={3} key={index} className={classes.masonry}>
        <Paper>
          <Link
            to={{
              pathname: "/content",
              state: { ...ctx },
              store: { itemlist }
            }}
          >
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
    const { classes, store } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <SubNav store={this.props.store} />
        <div className={classes.root}>
          <Paper>
            <Grid container spacing={8} style={{ marginTop: "5px" }}>
              {this.renderVegatables()}
            </Grid>
          </Paper>
          {/* <Paper>
            <AppBar position="static">
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={this.handleChange}
              >
                <Tab label="植物列表" style={{ width: "49vw" }} />
                <Tab label="食物的營養" style={{ width: "49vw" }} />
              </Tabs>
            </AppBar>
            {value === 0 && (
              <Grid container spacing={8} style={{ marginTop: "5px" }}>
                {this.renderVegatables()}
              </Grid>
            )}
            {value === 0 &&
              (store.itemlist.length === 0 && store.loading === false && (
                <div>No Data</div>
              ))}
            {value === 1 && (
              <Grid container spacing={8} className={classes.chart}>
                <Chart store={this.props.store} />
              </Grid>
            )}
          </Paper> */}
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
