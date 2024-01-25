import React, { FC } from 'react';


interface FooterProps {}

const Footer: FC<FooterProps> = () => (
<footer className="footer">
  <p className="pull-left" style={{ marginTop: "-14px" }}>
    <img src="img/test/geocities.jpg" />
  </p>
  <p className="pull-right" style={{ marginTop: "-14px" }}>
    <img src="img/test/hacker.gif" />
    &nbsp; Built with <a href="http://bootswatch.com">Bootswatch</a>
  </p>
  <center>
    <img src="img/test/counter2.gif" />
  </center>
</footer>

);

export default Footer;
