import React from "react";
import SectionImg from "../../images/Section_2-image.png";
import "./style.css";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

function Enjoy() {
  return (
    <div>
      <section class="subPage_1">
        <div class="content">
          <Title title={"Enjoy on your TV"} />
          <Paragraph
            para={
              " Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            }
          />
        </div>
        <img src={SectionImg} />
      </section>
    </div>
  );
}

export default Enjoy;
