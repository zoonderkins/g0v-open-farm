import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import Content from "./components/Content";

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
            <Route path="/page" component={Page} />
            <Route path="/content" component={Content} />
            <Route exact component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
