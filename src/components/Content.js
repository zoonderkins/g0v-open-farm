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
const showList = ["avg_total_growing_days" ,"min_growing_temperature" 
  ,"height" , "min_pH" , "max_pH" , "variety"];
const icons = ["https://static.thenounproject.com/png/81677-200.png",
"https://static.thenounproject.com/png/1979336-200.png",
"https://static.thenounproject.com/png/434088-200.png",
"https://static.thenounproject.com/png/1882074-200.png",
"https://static.thenounproject.com/png/1118764-200.png" , 
"https://static.thenounproject.com/png/61962-200.png"];
const units = ["days", "\u2103", "cm", "ph", "ph", ""];
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
          alt={`${vegatable.common_names}`}
          className={classes.media}
          image={`${vegatable.cover}`}
          title={`${vegatable.common_names}`}
        />
        <Link to="/category">
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
          {showList.map((x, i) => (
            <Card key={i} className={classes.card}>
              <CardActionArea>
                <Link to={`/${x}`}>
                  <CardContent>
                    <Typography component="h1">
                      <img
                        className={classes.contentImg}
                        src={`${icons[i]}`}
                      />
                    </Typography>
                    <Typography component="p" style={{ textAlign: "center" }}>
                      {`${vegatable[`${x}`]} ${units[i]}`}
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
