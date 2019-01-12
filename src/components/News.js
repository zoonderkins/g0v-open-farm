import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Nav from "./Nav";
import Avatar from "@material-ui/core/Avatar";
import {observer} from 'mobx-react';
import { getCropsList, getNewsList } from '../util/apiLogic';
import LoadingSpinner from './LoadingSpinner';
const styles = () => ({
  root: {
    width: "100%",
    maxWidth: 360
  }
});

class News extends Component {
  constructor(props) {
    super(props);
    let { currentTitle } = this.props;
    console.log(`[News] currentTitle: `, currentTitle);
    this.props.store.updateTitle(currentTitle);
  }
  async componentDidMount () {
    try {
      this.props.store.setLoadingState(true);
      let cropsList = await getCropsList({numToFetch:200});
      console.log(`[getCropsList]`, cropsList);
      this.props.store.updateCropsList(cropsList);
      console.log(`[getCropsList] `, this.props.store.cropList);
    } catch (e) {
      console.log(`[getCropsList] error`, e.toString());
    } finally {
      this.props.store.setLoadingState(false);
    }
    try {
      this.props.store.setLoadingState(true);
      let newsList = await getNewsList({numToFetch: 200});
      console.log(`[getNewsList]`, newsList);
      this.props.store.updateNewsList(newsList);
      console.log(`[getNewsList] `, this.props.store.newsAllList);
    } catch (e) {
      console.log(`[getNewsList] error`, e.toString());
    } finally {
      this.props.store.setLoadingState(false);
    }
  }

  renderList = () => {
    const {classes} = this.props;
    let {newsAllList} = this.props.store;
    console.log(`[renderList]`, newsAllList);
    return newsAllList.map((ctx, index)=>{
      return (<List key={index} className={classes.root}>
          <ListItem alignItems="flex-start">
            <Avatar src={ctx.cover} />
            <ListItemText
              primary={`${ctx.title}`}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {ctx.content}
                  </Typography>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {ctx.organizer}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
    )})
  }
  render() {
    // const { classes } = this.props;
    let store = this.props.store;
    return (
      <React.Fragment>
        <Nav store={store} />
        {this.renderList()}
        {this.props.store.loading&&this.props.store.newsAllList.length===0&&<LoadingSpinner loading={this.props.store.loading}/>}
      </React.Fragment>
    );
  }
}

News.propTypes = {
  classes: PropTypes.object.isRequired
};
News = observer(News);
export default withStyles(styles)(News);
