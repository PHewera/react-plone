import React from 'react';
import '../style/footer.css';

function Footer() {
  return (
    <div className="portal-footer">
      <div id="upper-footer">
        <ul id="site-actions-wrapper">
          <li className="site-action">Site Action 1</li>
          <li className="site-action">Site Action 2</li>
          <li className="site-action">Site Action 3</li>
        </ul>
      </div>
      <div id="lower-footer">
        <ul id="shortcut-wrapper">
          <li className="shortcut">Privacy Policy</li>
          <li className="shortcut">Contact</li>
          <li className="shortcut">Disclaimer</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
