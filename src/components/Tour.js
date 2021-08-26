import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
  Link,
} from "@material-ui/core";

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false,
    };
  }

  render() {
    const { id, image, info, price, name, removeTour } = this.props;
    return (
      <Card>
        <CardActionArea>
          <CardMedia style={{ height: "140px" }} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="button" component="h4">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              data-test="readmore-display"
            >
              {this.state.readMore ? info : `${info.substring(0, 200)}`}...
              <Link
                data-test="showmore-button"
                onClick={() =>
                  this.setState({ readMore: !this.state.readMore })
                }
              >
                {this.state.readMore ? "Show Less" : "Read More"}
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            ${price}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => removeTour(id)}
            data-test="remove-tour"
          >
            Not interested
          </Button>
        </CardActions>
      </Card>
    );
  }
}
Tour.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removeTour: PropTypes.func.isRequired,
};

export default Tour;
