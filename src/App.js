import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import Content from "./components/Content";
import { observer } from "mobx-react";
import Garden from "./stores/store";
const appStore = new Garden();
const Error = () => (
  <div>
    <h1>HTTP Error 404, Page not found</h1>
  </div>
);
class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
  };
  render() {
    return (
      <Router onChange={this.handleRoute}>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/page" render={(props)=><Page {...props} store={appStore}/>} />
            <Route path="/content" component={Content} />
            <Route exact component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}
App = observer(App);
export default App;
