import React, { useState, useEffect } from "react";

import affirmations from "../../services/affirmations";
import sendQuoteRequest from "../../services/db/sendQuoteRequest";
import Card from "../Card";
import LightBoxImage from "../LightBoxImage";
import Tags from "../Tags";

import "./style.css";

const Sidebar = ({ width }) => {
  const [affirmation, setAffirmation] = useState("");
  const [catSrc, setCatSrc] = useState("");

  useEffect(() => {
    sendQuoteRequest("/quotes/random", "GET", {}, false)
      .then((data) => {
        setAffirmation(data.text);
      })
      .catch((err) => {
        console.log("Error when get random quote -> ", err);
        const randomAffirmation =
          affirmations[Math.floor(Math.random() * affirmations.length)];
        setAffirmation(randomAffirmation);
      });
    const ts = new Date().getTime();
    const src = ` http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=${ts}`;
    setCatSrc(src);
  }, []);

  return (
    <div className="sidebarContainer" style={{ width }}>
      {affirmation && <div className="sidebarAffirmation">{affirmation}</div>}
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About </span>
          <span className="cardHeaderSecond">It</span>
        </div>
        <LightBoxImage
          imageClass=""
          imageSrc={catSrc}
          wrapperClass="profileImageContainer"
        />
        <div className="cardBody">
          <p className="personalBio">Funny cats...)</p>
          <p className="personalBio">
            {" "}
            I am noting what I've learned and interested in, to find later here
            for myself.
          </p>
        </div>
      </Card>
      <Tags />
    </div>
  );
};

export default Sidebar;
