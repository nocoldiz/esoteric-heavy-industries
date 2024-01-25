import React, { FC } from 'react';


interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
<>
  {/* Navbar ================================================== */}
  <div className="navbar navbar-fixed-top">
    <div className="navbar-inner">
      <div className="container">
        <a
          className="btn btn-navbar"
          data-toggle="collapse"
          data-target=".nav-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </a>
        <a className="brand" href="">
          Geo
        </a>
        <div className="nav-collapse" id="main-menu">
          <ul className="nav" id="main-menu-left">
            <li className="dropdown" id="preview-menu">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                Download <b className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a target="_blank" href="swatch/bootstrap.min.css">
                    bootstrap.min.css
                  </a>
                </li>
                <li>
                  <a target="_blank" href="swatch/bootstrap.css">
                    bootstrap.css
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a target="_blank" href="swatch/variables.less">
                    variables.less
                  </a>
                </li>
                <li>
                  <a target="_blank" href="swatch/bootswatch.less">
                    bootswatch.less
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://github.com/divshot/geo-bootstrap">GitHub</a>
            </li>
            <li>
              <a
                href="http://www.websitegoodies.com/guestbook.php?a=view&id=930308"
                target="_blank"
              >
                Guestbook
              </a>
            </li>
            <li style={{ paddingTop: 6 }}>
              &nbsp;
              <a
                href="https://twitter.com/share"
                className="twitter-share-button"
                data-text="Geo, a new Bootstrap theme from Divshot"
                data-via="divshot"
                data-size="large"
              >
                Tweet
              </a>
            </li>
          </ul>
          <ul className="nav pull-right" id="main-menu-right">
            <li>
              <a
                rel="tooltip"
                target="_blank"
                href="http://www.divshot.com"
                title="Static Web Hosting"
              >
                Free Static Web Hosting <i className="icon-share-alt" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</>

);

export default Navbar;
