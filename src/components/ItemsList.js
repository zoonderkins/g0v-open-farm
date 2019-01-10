import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
    console.log(this.props.store);
    let { currentTitle } = this.props.store;
    console.log(`[Vegetables] currentTitle`, currentTitle);
    this.props.store.updateTitle(currentTitle);
  }
  async componentDidMount() {
    // load data from apiUrl
    try {
      // document.title = this.props.store.title;
      let vegetableList = await getVegatableList({ numToFetch: 10 });
      this.props.store.updateList(vegetableList);
      console.log(`[itemlist]`, this.props.store.itemlist);
    } catch (e) {
      console.log(`[getVegatableList] error :`, e.toString());
    }
  }

  renderList = () => {
    const { classes } = this.props;
    let { itemlist } = this.props.store;

    return itemlist.map((ctx, index) => (
      <Link key={index} to={{ pathname: "/content", state: { ...ctx } }}>
        <List key={index} className={classes.root}>
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
      </Link>
    ));
  };
  render() {
    let store = this.props.store;
    return (
      <React.Fragment>
        <Nav store={store} />
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
