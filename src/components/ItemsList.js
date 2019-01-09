import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Nav from "./Nav";
import { getVegatableList } from "../util/apiLogic";
import { observer } from "mobx-react";

const styles = () => ({
  root: {
    width: "100%",
    maxWidth: 360
  }
});

class ItemsList extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // load data from apiUrl
    try {
      let vegetableList = await getVegatableList({ numToFetch: 10 });
      // this.setState({vegetableList: vegetableList});
      this.props.store.updateList(vegetableList);
      console.log(`[list]`, this.props.store.itemlist);
    } catch (e) {
      console.log(`[getVegatableList] error :`, e.toString());
    }
  }

  renderList = () => {
    const { classes } = this.props;
    let { itemlist } = this.props.store;

    return itemlist.map((ctx, index) => (
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <Avatar src={ctx.cover} />

          <ListItemText
            primary={ctx.common_names}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {ctx.common_names_zh}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    ));
  };
  render() {
    const { classes, store } = this.props;
    console.log(store.list);

    return (
      <React.Fragment>
        <Nav />
        <div>{this.renderList()}</div>
      </React.Fragment>
    );
  }
}

ItemsList.propTypes = {
  classes: PropTypes.object.isRequired
};
ItemsList = observer(ItemsList);
export default withStyles(styles)(ItemsList);
