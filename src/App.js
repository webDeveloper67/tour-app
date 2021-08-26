import React, { Component } from "react";
import Tours from "./components/Tours";
import Spinner from "./screens/Spinner";
import { Container, Grid, Box, Typography } from "@material-ui/core";
const url = "https://course-api.com/react-tours-project";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tours: [],
    };
  }

  fetchTours = async () => {
    const res = await fetch(url);

    const tours = await res.json();

    this.setState({ loading: false, tours: tours });
  };

  componentDidMount() {
    this.fetchTours();
  }

  removeTour = (id) => {
    let newTours = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({ tours: newTours });
  };

  render() {
    const { loading, tours } = this.state;
    return (
      <Container data-test="component-app">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box mb={10} mt={5}>
              <Typography variant="h5" align="center" data-test="title-display">
                Our Tours
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          {loading ? (
            <Spinner />
          ) : (
            <Tours tours={tours} removeTour={this.removeTour} />
          )}
        </Grid>
      </Container>
    );
  }
}

export default App;
