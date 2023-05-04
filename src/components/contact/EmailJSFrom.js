import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FormattedMessage } from "react-intl";

export const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (message != "") {
      emailjs
        .sendForm(
          "service_ctm2imn",
          "template_se69x8s",
          form.current,
          "OFqvJNeXiCbFvLRCF"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmitted(true);
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="inputs">
        <label style={{ zIndex: "10" }}>Email</label>
        <input
          onChange={handleChange}
          className="emailInput"
          type="email"
          name="user_email"
        />
        <label style={{ zIndex: "10" }}>
          <FormattedMessage id="app.contact.message" />
        </label>
        <textarea className="messageArea" name="message" />
        <input className="SubmitButton" type="submit" value={"Send"} />
        {submitted && (
          <div style={{ height: "auto", width: "auto" }}>
            Hvala za vaše sporočilo
          </div>
        )}
      </div>
    </form>
  );
};
