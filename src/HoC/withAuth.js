import React from "react";

function withAuth(WrappedComponent) {
  return function WrappedRender(originalProps) {
    console.log(originalProps.isAuth);
    function isAuthenticated() {
      return originalProps.isAuth;
    }

    const errMessage = (
      <div>
        Please <a href="/login">login</a> in order to access sensitive content!
      </div>
    );
    return (
      <div>
        {isAuthenticated() === true ? (
          <WrappedComponent {...originalProps} />
        ) : (
          errMessage
        )}
      </div>
    );
  };
}

export default withAuth;
