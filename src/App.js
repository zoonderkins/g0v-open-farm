import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Content from "./components/Content";
// import Vegetables from "./components/ItemsList";
import About from "./components/About";
import News from "./components/News";
import { observer } from "mobx-react";
import Garden from "./stores/store";
import { Helmet } from "react-helmet";
// set global store
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
          <Helmet>
            <title>{appStore.title}</title>
          </Helmet>
          <Switch>
            <Route
              path="/"
              render={props => (
                <Home {...props} currentTitle={"Home"} store={appStore} />
              )}
              exact
            />
            <Route
              path="/category"
              render={props => (
                <Category
                  {...props}
                  currentTitle={"Category"}
                  store={appStore}
                />
              )}
            />

            {/* <Route
              path="/vegetables"
              render={props => (
                <Vegetables
                  {...props}
                  currentTitle={"Vegetables"}
                  store={appStore}
                />
              )}
            /> */}
            <Route
              path="/news"
              render={props => (
                <News {...props} currentTitle={"News"} store={appStore} />
              )}
            />
            <Route
              path="/about"
              render={props => (
                <About {...props} currentTitle={"About"} store={appStore} />
              )}
            />
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
