import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <section
      className="menu cid-qxiabk0CYF"
      once="menu"
      id="menu1-2y"
      data-rv-view={1976}
    >
      <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="hamburger">
            <span />
            <span />
            <span />
            <span />
          </div>
        </button>
        <div className="menu-logo">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <img
                src="http://azai.tari.gov.tw/assets/images/logo-615x127.png"
                alt="Mobirise"
                media-simple="true"
                style={{ height: "5rem" }}
              />
            </span>
            <span className="navbar-caption-wrap" />
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav nav-dropdown nav-right"
            data-app-modern-menu="true"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link link text-white display-4">
                首頁
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>

    <section
      className="mbr-section content5 cid-qxOzrn5Fs7 mbr-parallax-background"
      id="content5-2x"
      data-rv-view={1973}
    >
      <div
        className="mbr-overlay"
        style={{ opacity: "0.5", backgroundColor: "rgb(44, 93, 251)" }}
      />
      <div className="container">
        <div className="media-container-row">
          <Link to="/">
            <div className=" col-12 col-md-8">
              <h2 className="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-5">
                我是標題
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
    <section className="tabs4 cid-qyTkUzLotG" id="tabs4-4o" data-rv-view={1978}>
      <div className="container">
        <div className="media-container-row mt-5 pt-3">
          <div
            className="tabs-container"
            style={{ width: "100%", textAlign: "center" }}
          >
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" id="t1">
                <Link
                  to="/page"
                  style={{ fontSize: "1.6rem", fontWeight: 700 }}
                  className="nav-link mbr-fonts-style active display-7"
                >
                  資料庫查詢
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      once
      className="cid-qxLmycUJ9t"
      id="footer6-3p"
      data-rv-view={2028}
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

export default Home;
