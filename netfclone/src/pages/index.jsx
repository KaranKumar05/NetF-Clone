import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import SubPages from "./subPages/subPages";
import FrequentQue from "./FrequentQue/FrequentQue";
import Footer from "./Footer/Footer";

function Index() {
  return (
    <div>
      <LandingPage />
      <SubPages />
      <FrequentQue />
      <Footer />
    </div>
  );
}

export default Index;
