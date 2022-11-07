import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcom from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsappIcon from "@material-ui/icons/WhatsApp";

import "../styles/Footer.css";

function Footer() {
  return (<div className="footer">
    <div className="socialMedia">
        <a href="https://www.instagram.com/thapelo_musa/"><InstagramIcom/></a>
        <a href="https://www.facebook.com/thapelo.nghayo.3/"><FacebookIcon/></a>
        <a href="https://www.linkedin.com/in/t-n/"><LinkedInIcon/></a>
        <a href="https://web.whatsapp.com/"><WhatsappIcon/></a>
    </div>
    <p> &copy; 2022 Thapelo Nghayo</p>
  </div>
  );
}

export default Footer;