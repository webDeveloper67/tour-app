import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Tour from "./Tour";

class Tours extends Component {
  render() {
    const { tours, removeTour } = this.props;
    return (
      <Fragment>
        {tours.map((tour) => (
          <Grid item key={tour.id} xs={12} sm={6} md={4}>
            <Tour {...tour} removeTour={removeTour} />
          </Grid>
        ))}
      </Fragment>
    );
  }
}

Tours.propTypes = {
  tours: PropTypes.array.isRequired,
  removeTour: PropTypes.func.isRequired,
};

export default Tours;
