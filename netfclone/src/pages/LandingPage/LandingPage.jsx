import React from "react";
import "./style.css";
import Logo from "../../images/logo.svg";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { HiOutlineChevronRight } from "react-icons/hi";

function LandingPage() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="logo" />
        <button>Sign In</button>
      </nav>
      <div class="head_content">
        <Title title={"Unlimited movies, TV shows, and more"} />
        <Paragraph para={"Watch anywhere. Cancel anytime."} />
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div class="get_start">
          <input type="text" placeholder="Email address" required />
          <button>
            Get Started
            <span>
              <HiOutlineChevronRight />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default LandingPage;
