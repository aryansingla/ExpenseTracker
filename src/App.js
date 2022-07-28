import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3} lg={4}> 
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} lg={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
