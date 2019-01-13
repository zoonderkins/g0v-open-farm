import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { getVegatableList } from "../util/apiLogic";
import {observer} from 'mobx-react';
const styles = {
  root: {
    flexGrow: 1,
    width: "100%"
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
    background: "green",
    color: "white"
  },
  input: {
    display: "none"
  }
};

class SubNav extends React.Component {
  state = {
    value: 0
  };
  filterByMonth = (month) => ((item)=>(item.harvest_month!==null && Number(item.harvest_month) === Number(month)));
  handleChange =  async (event, value) => {
    this.setState({ value });
    let vegetableList = [];
    try {
      this.props.store.setLoadingState(true);
      this.props.store.updateList(vegetableList);
      if (value===0) {
        vegetableList = await getVegatableList({ numToFetch: 200 });
      } else {
        vegetableList = await getVegatableList({ numToFetch: 200, filterFn: this.filterByMonth(value) });
      }
      this.props.store.updateList(vegetableList);
      console.log(`[itemlist]`, this.props.store.itemlist);
    } catch (e) {
      console.log(`[change month] error `, e.toString() );
    } finally {
      this.props.store.setLoadingState(false);
    }
  };
  
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.bg}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
          >
            <Tab label="All" />>
            <Tab label="Jan" />
            <Tab label="Feb" />
            <Tab label="March" />
            <Tab label="April" />
            <Tab label="May" />
            <Tab label="June" />
            <Tab label="July" />
            <Tab label="Aug" />
            <Tab label="Sep" />
            <Tab label="Octo" />
            <Tab label="Nov" />
            <Tab label="Dec" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

SubNav.propTypes = {
  classes: PropTypes.object.isRequired
};
SubNav = observer(SubNav);
export default withStyles(styles)(SubNav);
