import React from "react";
import SectionImage from "../../images/Section_3-image.jpg";
import "./style.css";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

function Download() {
  return (
    <div>
      <section class="subPage_2">
        <img src={SectionImage} alt="" />
        <div class="content">
          <Title title={"Download your shows to watch offline"} />
          <Paragraph
            para={
              "Save your favorites easily and always have something to watch."
            }
          />
        </div>
      </section>
    </div>
  );
}

export default Download;
