import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
  handleChange = (event, value) => {
    this.setState({ value });
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
            indicatorColor="white"
            // textColor="primary"
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
