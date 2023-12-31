import React from "react";
import withStyles from "../HoC/withStyles";

const DynamicButton = (props) => {
  return <button style={props.styles}>Next</button>;
};

export default withStyles(DynamicButton);
