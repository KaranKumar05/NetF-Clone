import React from "react";
import Profile from "./Profile";
import Enjoy from "./Enjoy";
import Download from "./Download";
import Watch from "./Watch";

function Index() {
  return (
    <div style={{ background: "black" }}>
      <Enjoy />
      <Download />
      <Watch />
      <Profile />
    </div>
  );
}

export default Index;
