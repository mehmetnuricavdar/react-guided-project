export default (WrappedComponent) => {
  return function wrappedRender(originalProps) {
    const { extraProp, ...restProps } = originalProps;
    // methods that utilize extrProps

    return( <WrappedComponent {...restProps} injectedProp={injectedProp} />);
  };
};
