import React from 'react';
import '../style/footer.css';
import LowerFooter from "./sub_components/lower_footer";
import UpperFooter from "./sub_components/upper_footer";


function Footer() {
  return (
    <div id="portal-footer">
      <UpperFooter />
      <LowerFooter />
    </div>
  );
}

export default Footer;
