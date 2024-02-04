import React from "react";
import "./style.css";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

function Watch() {
  return (
    <div>
      <section class="subPage_3">
        <div>
          <div>
            <Title title={"Watch"} />
            <Title title={"everything"} />
          </div>
          <div>
            <Title title={"Watch everything"} />
          </div>
          <Paragraph
            para={
              "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV"
            }
          />
        </div>
      </section>
    </div>
  );
}

export default Watch;
