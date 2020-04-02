import React from 'react';
import '../style/footer.css';

function Footer() {
  return (
    <div id="portal-footer">
      <div id="upper-footer">
      </div>
      <div id="lower-footer">
        <ul id="site-actions-wrapper">
          <li className="site-action"><a href="#">Privacy Policy</a></li>
          <li className="site-action"><a href="#">Contact</a></li>
          <li className="site-action"><a href="#">Disclaimer</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
