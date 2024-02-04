import React, { useState } from "react";
import "./style.css";
import { faqData } from "./faqData";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { IoAdd } from "react-icons/io5";
import { HiOutlineChevronRight } from "react-icons/hi";

function FrequentQue() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="frequent-que">
      <Title title="Frequently Asked Questions" />
      {faqData.map((item, index) => (
        <div key={index} className="queContainer">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <Paragraph para={item.question} />
            <span
              style={
                openIndex === index
                  ? { rotate: "45deg", transition: ".2s" }
                  : { rotate: "0deg", transition: ".2s" }
              }
            >
              <IoAdd />
            </span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <Paragraph para={item.answer} />
              <span
                style={
                  item.answer2 === ""
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <Paragraph para={item.answer2} />
              </span>
            </div>
          )}
        </div>
      ))}
      <div class="get_startContainer">
        <Paragraph
          para={
            "Ready to watch? Enter your email to create or restart your membership."
          }
        />
        <div>
          <input type="text" placeholder="Email address" required />
          <button>
            Get Started
            <span>
              <HiOutlineChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FrequentQue;
