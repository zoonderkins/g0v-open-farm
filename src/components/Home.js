import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    let { currentTitle } = this.props;
    console.log(`[Home] currentTitle: `, currentTitle);
    this.props.store.updateTitle(currentTitle);
  }
  render() {
    // document.title = this.props.store.title;
    return (
      <div>
        <section className="menu cid-qxiabk0CYF" id="menu1-2y">
          <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
            <div className="navbar-brand">
              <span className="navbar-logo">
                <img
                  src="https://raw.githubusercontent.com/wizardamigos/chapter-taipei/master/assets/wizard3.png"
                  alt="Mobirise"
                  media-simple="true"
                  style={{ height: "5rem" }}
                />
              </span>
              <span className="navbar-caption-wrap" />
            </div>
          </nav>
        </section>

        <section className="mbr-section content5 cid-qxOzrn5Fs7 mbr-parallax-background">
          <div
            className="mbr-overlay"
            style={{ opacity: "0.5", backgroundColor: "rgb(44, 93, 251)" }}
          />
          <div className="container">
            <div className="media-container-row">
              <Link to="/">
                <div className=" col-12 col-md-8">
                  <h2 className="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-5">
                    作物圖鑒
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="tabs4 cid-qyTkUzLotG">
          <div className="container">
            <div className="media-container-row mt-5 pt-3">
              <div
                className="tabs-container"
                style={{ width: "100%", textAlign: "center" }}
              >
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" id="t1">
                    <Link
                      to="/category"
                      style={{ fontSize: "1.6rem", fontWeight: 700 }}
                      className="nav-link mbr-fonts-style active display-7"
                    >
                      Category
                    </Link>
                  </li>
                  <li className="nav-item" id="t1">
                    <Link
                      to="/about"
                      style={{ fontSize: "1.6rem", fontWeight: 700 }}
                      className="nav-link mbr-fonts-style active display-7"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          // once
          className="cid-qxLmycUJ9t"
        >
          <div className="container">
            <div className="media-container-row align-center mbr-white">
              <div className="col-12">
                <p className="mbr-text mb-0 mbr-fonts-style display-7">
                  © Copyright 2019
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
