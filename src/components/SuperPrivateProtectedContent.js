import React from "react";
import withAuth from "../HoC/withAuth";

export class SuperPrivateProtectedContent extends React.Component {
  render() {
    return (
      <div>Some sensitive data only viewable by authenticated users!!!</div>
    );
  }
}

export default withAuth(SuperPrivateProtectedContent);
