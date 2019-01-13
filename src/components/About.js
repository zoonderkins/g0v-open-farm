import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import Nav from "./Nav";

const styles = () => ({
  root: {
    width: "100%",
    maxWidth: 360
  }
});

class About extends Component {
  constructor(props) {
    super(props);
    let { currentTitle } = this.props;
    console.log(`[About] currentTitle: `, currentTitle);
    this.props.store.updateTitle(currentTitle);
  }

  render() {
    const { classes } = this.props;
    let store = this.props.store;
    return (
      <React.Fragment>
        <Nav store={store} />
        <List className={classes.root}>
          <ListItem>
            <Avatar>
              <Icon>mail</Icon>
            </Avatar>
            <ListItemText
              primary="聯繫我們"
              secondary="如果有任何建議及相關資料修正歡迎與我們聯絡"
            />
          </ListItem>
          <ListItem>
            <Avatar>
              <Icon>star</Icon>
            </Avatar>
            <ListItemText
              primary="Star"
              secondary="喜歡我們的專案嗎，別吝嗇您的Start 與 分享哦 啾咪"
            />
          </ListItem>
          <ListItem>
            <Avatar>
              <Icon>facebook</Icon>
            </Avatar>
            <ListItemText primary="Facebook" secondary="Find us on facebook" />
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}
About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
