import React, { useState } from "react";
import "./Quality.css";
import certifikat1 from "../../photos/certifikat1.pdf";
import certifikat2 from "../../photos/certifikat2.pdf";
import certifikat3 from "../../photos/certifikat3.pdf";
import certifikat4 from "../../photos/certifikat4.pdf";
import certifikat5 from "../../photos/certifikat5.pdf";
import certifikat6 from "../../photos/certifikat6.pdf";
import certifikat7 from "../../photos/certifikat7.pdf";
import certifikat8 from "../../photos/certifikat8.pdf";
import certifikat9 from "../../photos/certifikat9.PDF";
import certifikat10 from "../../photos/certifikat10.PDF";
import certifikat11 from "../../photos/certifikat11.jpg";
import certifikat22 from "../../photos/certifikat22.jpg";
import certifikat33 from "../../photos/certifikat33.jpg";
import certifikat44 from "../../photos/certifikat44.jpg";
import certifikat55 from "../../photos/certifikat55.jpg";
import certifikat66 from "../../photos/certifikat66.jpg";
import certifikat77 from "../../photos/certifikat77.jpg";
import certifikat88 from "../../photos/certifikat88.jpg";
import certifikat99 from "../../photos/certifikat99.jpg";
import certifikat1010 from "../../photos/certifikat1010.jpg";
import { FormattedMessage } from "react-intl";
import { Helmet } from "react-helmet-async";

const Quality = () => {
  const handleImageClick = (url) => {
    console.log("URL: ", url);
    window.open(url, "_blank");
  };

  return (
    <div className="background">
      <Helmet>
        <title>Plan-Tech Quality</title>
        <meta name="description" content="The best quality welding" />
        <link rel="canonical" href="/quality" />
      </Helmet>
      <div className="title">
        <FormattedMessage id="app.quality" />
      </div>
      <div className="text-container">
        <div className="quality-text">
          <FormattedMessage id="app.quality.text" />
          <b>
            <FormattedMessage id="app.quality.textBold" />
          </b>
        </div>
        <div className="quality-pictures">
          <img
            src={certifikat11}
            onClick={() => handleImageClick(certifikat1)}
            className="certificate"
            alt=""
          />
          <img
            src={certifikat22}
            onClick={() => handleImageClick(certifikat2)}
            className="certificate"
            alt=""
          />
          <img
            src={certifikat99}
            onClick={() => handleImageClick(certifikat9)}
            className="certificate"
            alt=""
          />
          <img
            src={certifikat1010}
            onClick={() => handleImageClick(certifikat10)}
            className="certificate"
            alt=""
          />
          <img
            src={certifikat33}
            onClick={() => handleImageClick(certifikat3)}
            className="certificate"
            alt=""
          />
          <img
            src={certifikat44}
            onClick={() => handleImageClick(certifikat4)}
            className="certificate"
            alt=""
          />
          <img
            src={certifikat55}
            onClick={() => handleImageClick(certifikat5)}
            className="certificate"
            alt=""
          />
          <img
            src={certifikat66}
            onClick={() => handleImageClick(certifikat6)}
            className="certificate"
            alt=""
          />
          <img
            src={certifikat77}
            onClick={() => handleImageClick(certifikat7)}
            className="certificate"
            alt=""
          />
          <img
            src={certifikat88}
            onClick={() => handleImageClick(certifikat8)}
            className="certificate"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Quality;
