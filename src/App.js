import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import CardComponent from "./container/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import ApiData from "./container/API/Api";
import SaveData from "./container/SaveData/SaveData";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CardComponent />
        <Switch>
          <Route path="/" exact component={ApiData} />
          <Route path="/saved" component={SaveData} />
        </Switch>
      </div>
    );
  }
}

export default App;
