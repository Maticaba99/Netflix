import React, { useState } from "react";
import { Link } from "react-router-dom";

import IosArrowDown from "react-ionicons/lib/IosArrowDown";
import IosGlobeOutline from "react-ionicons/lib/IosGlobeOutline";

import "../assets/less/Footer.less";

function Footer() {
  const [lang, setLang] = useState({
    language: false,
  });
  const handleClick = (e) => {
    e.preventDefault();
    setLang({
      language: !lang.language,
    });
  };
  return (
    <div className="Footer">
      <div className="Footer__container">
        <span>
          Questions? <Link>Call 1-877-742-1335</Link>
        </span>
        <div className="Footer__container--columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
            <li>
              <Link>Ways to watch</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Help center</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Terms of use</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Account</Link>
            </li>
            <li>
              <Link>Redeem Gift Cards</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Media Center</Link>
            </li>
            <li>
              <Link>Buy Gift Cards</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notices</Link>
            </li>
          </ul>
        </div>
        <div className="lang-button" onClick={handleClick}>
          <IosGlobeOutline color="white" />
          English
          <IosArrowDown color="white" />
        </div>
        {lang.language && (
          <div className="lang-toggle">
            <ul>
              <li>English</li>
            </ul>
            <ul>
              <li>Spanish</li>
            </ul>
          </div>
        )}
        <span>Netflix United States</span>
      </div>
    </div>
  );
}
export default Footer;
