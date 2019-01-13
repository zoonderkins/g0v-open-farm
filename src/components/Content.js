import React, { Component } from "react";
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
  title: {
    zIndex: 10,
    position: "absolute",
    top: 10,
    left: 50,
    color: "white",
    fontWeight: "bold",
    background: "black"
  },
  media: {
    objectFit: "cover",
    opacity: ".5",
    height: "190px"
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "10px",
    height: "auto",
    flexGrow: 1
  },
  card: {
    maxWidth: "180px",
    margin: "5px"
  },
  contentImg: {
    height: "80px"
  },
  fab: {
    position: "absolute",
    zIndex: "22",
    marginLeft: "-50%",
    right: "10px",
    top: "40vw"
  },
  back: {
    position: "absolute",
    zIndex: "22",
    fontWeight: "bold",
    top: "5vh",
    left: "5px"
  }
};

const showList = [
  "avg_total_growing_days",
  "min_growing_temperature",
  "height",
  "min_pH",
  "max_pH",
  "variety"
];
const icons = [
  "https://static.thenounproject.com/png/81677-200.png",
  "https://static.thenounproject.com/png/1979336-200.png",
  "https://static.thenounproject.com/png/434088-200.png",
  "https://static.thenounproject.com/png/1882074-200.png",
  "https://static.thenounproject.com/png/1118764-200.png",
  "https://static.thenounproject.com/png/61962-200.png"
];
const units = ["days", "\u2103", "cm", "ph", "ph", ""];
class Content extends Component {
  constructor(props) {
    super(props);
    let { location } = this.props;
    let vegatable = location
      ? location.hasOwnProperty("state")
        ? location.state
        : null
      : null;
    this.state = {
      vegatable: vegatable
    };
  }

  render() {
    const { classes } = this.props;
    const { vegatable } = this.state;
    console.log(vegatable);

    return (
      <div className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${vegatable.name}`}
            className={classes.media}
            image={`${vegatable.cover}`}
            title={`${vegatable.name}`}
          />
          <Typography variant="h5" component="h2" className={classes.title}>
            {`${vegatable.name}`}
          </Typography>
        </CardActionArea>
        <Link to="/category">
          <IconButton className={classes.back}>
            <ChevronLeftIcon style={{ color: "white", fontWeight: "bold" }} />
          </IconButton>
        </Link>

        <Fab color="default" className={classes.fab}>
          <img
            style={{ height: "40px" }}
            src="https://static.thenounproject.com/png/61962-200.png"
            alt={"default"}
          />
        </Fab>

        <div className={classes.wrap}>
          {showList.map((x, i) => {
            return vegatable.hasOwnProperty(`${x}`) &&
              vegatable[`${x}`] !== null ? (
              <Card key={i} className={classes.card}>
                <CardActionArea>
                  <Link to={`/${x}`}>
                    <CardContent>
                      <Typography component="h1">
                        <img
                          className={classes.contentImg}
                          src={`${icons[i]}`}
                          alt={`${x}`}
                        />
                      </Typography>
                      <Typography component="p" style={{ textAlign: "center" }}>
                        {`${vegatable[`${x}`]} ${units[i]}`}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
