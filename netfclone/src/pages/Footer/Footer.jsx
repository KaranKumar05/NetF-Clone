import React from "react";
import "./style.css";
import { IoLanguage } from "react-icons/io5";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <a href="/#">Questions? Contact us.</a>
        </div>
        <div className="lg-footer">
          <span>
            <a href="/#">FAQ</a>
            <a href="/#">Investor Relations</a>
            <a href="/#">Privacy</a>
            <a href="/#"> Speed Test</a>
          </span>
          <span>
            <a href="/#">Help Center</a>
            <a href="/#">Jobs</a>
            <a href="/#">Cookie Preferences</a>
            <a href="/#">Legal Notices</a>
          </span>
          <span>
            <a href="/#">Account</a>
            <a href="/#">Wat to Watch</a>
            <a href="/#">Corporate Information</a>
            <a href="/#">Only on Netflix</a>
          </span>
          <span>
            <a href="/#">Media Center</a>
            <a href="/#">Terms of Use</a>
            <a href="/#">Contact Us</a>
          </span>
        </div>
        <div className="md-sl-footer">
          <span>
            <a href="/#">FAQ</a>
            <a href="/#">Account</a>
            <a href="/#">Investor Relations</a>
            <a href="/#">Way to Watch</a>
            <a href="/#">Privacy</a>
            <a href="/#">Corporate Information</a>
            <a href="/#">Speed Test</a>
            <a href="/#">Only on Netflix</a>
          </span>
          <span>
            <a href="/#">Help Center</a>
            <a href="/#">Media Center</a>
            <a href="/#">Jobs</a>
            <a href="/#">Terms of Use</a>
            <a href="/#">Cookie Preference</a>
            <a href="/#">Contact Us</a>
            <a href="/#">Legal Notice</a>
          </span>
        </div>
        <div className="selectLang">
          <select id="select">
            <option>English</option>
          </select>
          <span>
            <label htmlFor="select">
              <IoLanguage />
            </label>
          </span>
        </div>
        <p>Netflix Pakistan</p>
      </div>
    </footer>
  );
}

export default Footer;
