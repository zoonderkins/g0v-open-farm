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
          <div className="header__title_text">
            開放作物圖鑑 Cropdex decentralized app
          </div>
        </div>
        <h2 className="header__subtitle">
          Cropdex 是一個建構在
          Ethereum區塊鏈技術，有效向消費者露出當季農糧作物，提高消費在地安心蔬果意願，並同時以科學方式曝光其營養資訊，讓更多人吃在地食材，提高台灣整體農糧自給率。
        </h2>

        <div className="cards">
          <div className="card__inner">
            <Link to="/category">開始 Start </Link>
          </div>
          <div className="card__inner">
            <Link to="/about">關於 About </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
