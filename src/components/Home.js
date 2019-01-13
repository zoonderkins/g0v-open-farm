import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    let { currentTitle } = this.props;
    console.log(`[Home] currentTitle: `, currentTitle);
    this.props.store.updateTitle(currentTitle);
  }

  render() {
    return (
      <div className="body">
        <div className="wrapper">
          <div className="header">
            <h1 className="header__title">Cropdex 作物圖鑑</h1>
            <h2 className="header__subtitle">
              Cropdex 是一個建構在 Ethereum
              blockchain，富有遊戲性的開源專案，任何人都可以參與
            </h2>
          </div>

          <div className="cards">
            <div className="card__inner">
              <Link to="/category">Category</Link>
            </div>
            <div className="card__inner">
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
