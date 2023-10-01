import React from "react";
import { FormattedMessage } from "react-intl";
import "./Contact.css";
import { ContactUs } from "./EmailJSFrom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";

import { IoMdCall } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="contact-form-container">
      <Helmet>
        <title>Plan-Tech Contact</title>
        <meta name="description" content="Contact us - Plan-Tech" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="contact-form">
        <div style={{ paddingTop: "1%" }}>
          <FormattedMessage id="app.contact.contactUs" />
          <div className="form-container">
            <ContactUs />
            <div className="location-div">
              <div
                style={{
                  paddingLeft: "2%",
                  fontSize: "large",
                  display: "flex",
                }}
              >
                <HiOutlineLocationMarker
                  style={{ marginRight: "10px", fontSize: "30px" }}
                />
                Bukovci 080, Markovci, Slovenia
              </div>
              <div
                style={{
                  paddingLeft: "2%",
                  paddingTop: "5%",
                  fontSize: "large",
                  display: "flex",
                }}
              >
                <MdOutlineMailOutline
                  style={{ marginRight: "10px", fontSize: "30px" }}
                />
                info@plantech.si
              </div>
              <div
                style={{
                  paddingLeft: "2%",
                  paddingTop: "5%",
                  fontSize: "large",
                  display: "flex",
                }}
              >
                <IoMdCall style={{ marginRight: "10px", fontSize: "30px" }} />
                +386 (0)31 722 522
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
