import React, {Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  root: {
    overflow: "hidden"
  },
  card: {
    maxWidth: 380,
    margin: "10px"
  },
  media: {
    objectFit: "cover",
    height: "190px"
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    margin: "2%",
    padding: "10px",
    height: "auto",
    flexWrap: "wrap"
  },
  contentImg: {
    height: "80px"
  },
  fab: {
    position: "absolute",
    zIndex: "22",
    marginLeft: "-50%",
    right: "10px",
    top: "20vh"
  },
  back: {
    position: "absolute",
    zIndex: "22",
    top: "2vh",
    left: "5px"
  }
};

class Content extends Component {
  constructor(props){
    super(props);
    let {location} = this.props;
    let vegatable = location?(location.hasOwnProperty('state')? location.state:null):null;
    this.state = {
      "vegatable": vegatable
    };
  }
  render() {
    const {classes} = this.props;
    const {vegatable} = this.state;
    console.log(vegatable);
  
    return (
      <div className={classes.root}>
        <CardMedia
          component="img"
          alt="Pumpkin"
          className={classes.media}
          image={`${vegatable.cover}`}
          title="Pumpkin"
        />
        <Link to="/page">
          <IconButton className={classes.back}>
            <ChevronLeftIcon style={{ color: "white", fontWeight: "bold" }} />
          </IconButton>
        </Link>

        <Fab color="brown" className={classes.fab}>
          <img
            style={{ height: "40px" }}
            src="https://static.thenounproject.com/png/61962-200.png"
          />
        </Fab>
        <div className={classes.wrap}>
          {[...Array(12)].map((x, i) => (
            <Card key={i} className={classes.card}>
              <CardActionArea>
                <Link to="/aa">
                  <CardContent>
                    <Typography component="h1">
                      <img
                        className={classes.contentImg}
                        src="https://static.thenounproject.com/png/61962-200.png"
                      />
                    </Typography>
                    <Typography component="p" style={{ textAlign: "center" }}>
                      {`${vegatable.common_names_zh}`}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  
};

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
