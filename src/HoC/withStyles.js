import React from "react";
import commonStyles from "../styles/commonStyles";

const withStyles = (WrappedComponent) => {
  const translateProps = (props) => {
    let _styles = { ...commonStyles.default };
    if (props.disable) {
      _styles = { ..._styles, ...commonStyles.disable };
    }
  };
  return function wrappedRender(originalProps) {
    return <WrappedComponent {...originalProps} />;
  };
};

export default withStyles;
