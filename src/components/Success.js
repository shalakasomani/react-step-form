import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export const Success = () => {
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Success" />
        <h1> Thank you for the submission </h1>
      </>
    </MuiThemeProvider>
  );
};
