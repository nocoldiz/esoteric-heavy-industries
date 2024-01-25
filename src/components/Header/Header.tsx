import React, { FC } from 'react';
import Marquee from 'react-fast-marquee';


interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div>
<header className="jumbotron subhead" id="overview">
  <div className="row">
    <div className="span6">
      <h1>
            <img src="img/test/7upspot.gif" />
          {/*
        &nbsp;<font color="#FF0000">G</font>
        <font color="#FF5A00">e</font>
        <font color="#FFB400">o</font>
        <font color="#FFff00"> </font>
        <font color="#A5ff00">f</font>
        <font color="#4Bff00">o</font>
        <font color="#00ff00">r</font>
        <font color="#00ff5A"> </font>
        <blink>
          <font color="#00ffB4">B</font>
          <font color="#00ffff">o</font>
          <font color="#00B4ff">o</font>
          <font color="#005Aff">t</font>
          <font color="#0000ff">s</font>
          <font color="#4B00ff">t</font>
          <font color="#A500ff">r</font>
          <font color="#FF00ff">a</font>
          <font color="#FF00B4">p</font>
        </blink> */}
      </h1>
      <p className="lead">A theme for Twitter Bootstrap, from Divshot.</p>
      <table cellPadding={2} cellSpacing={2}>
        <tbody>
          <tr>
            <td>
              <img src="img/test/ie_logo.gif" />
            </td>
            <td>
              <img src="img/test/ns_logo.gif" />
            </td>
            <td>
              <img src="img/test/noframes.gif" />
            </td>
            <td>
              <img src="img/test/notepad.gif" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="span6">
      <center>
        <img src="img/test/yahooweek.gif" />
        <img src="img/test/community.gif" />
        <img src="img/test/wabwalk.gif" />
        <img src="img/test/webtrips.gif" />
      </center>
    </div>
  </div>
  <Marquee>
    To get started, download the "bootstrap.css" or "bootstrap.min.css" file and
    include it in your HTML webpage &lt;head&gt; tag: &lt;link
    href="bootstrap.css" rel="stylesheet"&gt;
  </Marquee>
  <div className="subnav">
    <ul className="nav nav-pills">
      <li>
        <a href="#typography">Typography</a>
      </li>
      <li>
        <a href="#navbar">Navbar</a>
      </li>
      <li>
        <a href="#buttons">
          <img
            className="pull-left"
            style={{ marginTop: "-5px" }}
            src="img/test/hot.gif"
          />{" "}
          Buttons
        </a>
      </li>
      <li>
        <a href="#forms">Forms</a>
      </li>
      <li>
        <a href="#tables">Tables</a>
      </li>
      <li>
        <a href="#miscellaneous">
          <img
            className="pull-left"
            style={{ marginTop: "-3px" }}
            src="img/test/new.gif"
          />{" "}
          Miscellaneous
        </a>
      </li>
    </ul>
  </div>
</header>
  </div>
);

export default Header;
