import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Content from "./components/Content";
import Vegetables from "./components/ItemsList";
import {Provider, Subscribe} from "unstated";
import GardenContainer from './containers/gardenContainer';
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
      <Provider>
        <Subscribe to={[GardenContainer]}>
        {container=>
          (<Router onChange={this.handleRoute}>
            <div>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route
                  path="/category"
                  render={props => <Category {...props} store={container} />}
                />
                <Route path="/content" component={Content} />
                <Route
                  path="/vegetables"
                  render={props => <Vegetables {...props} store={container} />}
                />
                <Route exact component={Error} />
              </Switch>
            </div>
          </Router>)
        }
        </Subscribe>
      </Provider>
    );
  }
}
// App = observer(App);
export default App;
