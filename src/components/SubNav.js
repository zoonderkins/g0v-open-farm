import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { getVegatableList } from "../util/apiLogic";
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

const filterWithGrowthMonFn = (month)=>(item => item.growth_month===month);
class SubNav extends React.Component {
  state = {
    value: 0
  };
  handleChange = async (event, value) => {
    this.setState({ value });
    
    
    try {
      // document.title = this.props.store.title;
      this.props.store.setLoadingState(true);
      let vegetableList = await getVegatableList({numToFetch: 100, isMock: true, filterFn: filterWithGrowthMonFn(value+1)});
      this.props.store.updateList(vegetableList);
      console.log(`[itemlist]`, this.props.store.itemlist);
    } catch (e) {
      console.log(`[getVegatableList] error :`, e.toString());
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

export default withStyles(styles)(SubNav);
