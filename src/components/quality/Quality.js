import React, { useState } from "react";
import "./Quality.css";
import PdfModal from "./PdfModal";
import certifikat1 from "../../photos/certifikat1.pdf";
import certifikat2 from "../../photos/certifikat2.pdf";
import certifikat3 from "../../photos/certifikat3.pdf";
import certifikat4 from "../../photos/certifikat4.pdf";
import certifikat5 from "../../photos/certifikat5.pdf";
import certifikat11 from "../../photos/certifikat11.jpg";
import certifikat22 from "../../photos/certifikat22.jpg";
import certifikat33 from "../../photos/certifikat33.jpg";
import certifikat44 from "../../photos/certifikat44.jpg";
import certifikat55 from "../../photos/certifikat55.jpg";

const Quality = () => {
  const handleImageClick = (url) => {
    console.log("URL: ", url);
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="title">Quality</div>
      <div className="text-container">
        <div className="quality-text">
          Kvaliteta opravljenih storitev je naša osnovna konkurenčna prednost,
          ki jo želimo izkazati tudi na uradno priznani način. Zato smo
          pridobili certifikate
          <b>
            {" "}
            ISO 9001:2008, EN ISO 3834-2, AD 2000 HP0, SCCP, EN 729/3 (DIN
            18800/7) in EN 1090-2
          </b>
        </div>
        <div className="quality-pictures">
          <img
            src={certifikat11}
            onClick={() => handleImageClick(certifikat1)}
          />
          <img
            src={certifikat22}
            onClick={() => handleImageClick(certifikat2)}
          />
          <img
            src={certifikat33}
            onClick={() => handleImageClick(certifikat3)}
          />
          <img
            src={certifikat44}
            onClick={() => handleImageClick(certifikat4)}
          />
          <img
            src={certifikat55}
            onClick={() => handleImageClick(certifikat5)}
          />
        </div>
      </div>
    </div>
  );
};

export default Quality;
