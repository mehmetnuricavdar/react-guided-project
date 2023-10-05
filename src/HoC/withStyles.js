import React from "react";
import commonStyles from "../styles/commonStyles";

const withStyles = (WrappedComponent) => {
  const translateProps = (props) => {
    let _styles = { ...commonStyles.default };
    if (props.disable) {
      _styles = { ..._styles, ...commonStyles.halloween };
    }
    const newProps = { ...props, styles: _styles };

    return newProps;
  };

  return function wrappedRender(originalProps) {
    const _newProps = translateProps(originalProps);
    // console.log(_newProps);

    return <WrappedComponent {..._newProps} />;
  };
};

export default withStyles;
