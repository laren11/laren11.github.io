import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FormattedMessage } from "react-intl";

export const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n27615a",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="inputs">
        <label style={{ zIndex: "10" }}>Email</label>
        <input className="emailInput" type="email" name="user_email" />
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
