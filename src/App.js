import React from "react";
import "./App.css";
import SuperPrivateProtectedContent from "./components/SuperPrivateProtectedContent";
import DynamicButton from "./components/DynamicButton";

class App extends React.Component {
  state = { isAuth: true, disabled: false };
  render() {
    return (
      <div className="App">
        <SuperPrivateProtectedContent isAuth={this.state.isAuth} />
        <DynamicButton />
      </div>
    );
  }
}

export default App;
