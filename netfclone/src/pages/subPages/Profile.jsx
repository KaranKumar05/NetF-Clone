import React from "react";
import "./style.css";
import SectionImg from "../../images/Section_5-image.png";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

function Profile() {
  return (
    <div>
      <section class="subPage_4">
        <img src={SectionImg} alt="" />
        <div>
          <Title title={"Create profiles for kids"} />
          <Paragraph
            para={
              "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
            }
          />
        </div>
      </section>
    </div>
  );
}

export default Profile;
