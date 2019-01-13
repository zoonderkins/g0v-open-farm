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
      <div className="header">
        <div className="header__title">
          <div className="header__title_text">Cropdex 作物圖鑑</div>
        </div>
        <h2 className="header__subtitle">
          Cropdex 是一個建構在 Ethereum
          blockchain，富有遊戲性的開源專案，任何人都可以參與
        </h2>

        <div className="cards">
          <div className="card__inner">
            <Link to="/category">植物類別</Link>
          </div>
          <div className="card__inner">
            <Link to="/about">關於我們</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
