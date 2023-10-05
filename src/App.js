import React from "react";
import "./App.css";
import SuperPrivateProtectedContent from "./components/SuperPrivateProtectedContent";

class App extends React.Component {
  state = {isAuth: false};
  render() {
    return <div className="App">
      <SuperPrivateProtectedContent isAuth={this.state.isAuth} />
    </div>;
  }
}

export default App;
