import React, { useState } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_knfd18s",
        "template_zl70qb4",
        form.current,
        "c8NxpngihVJdhF2Mc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSent((e) => !e);
    setTimeout(() => {
      setSent((e) => !e);
    }, 3000);
    setDisableBtn(true);
    setTimeout(() => {
      setDisableBtn(false);
    }, 180000);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>holturaevm@gmail.com</h5>
            <a href="mailto:holturaevm@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsTelegram className="contact_option-icon" />
            <h4>Telegram</h4>
            <h5>Muhammadrasul</h5>
            <a href="https://t.me/Kholturaev06" target="_blank">
              Send a message  
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+992904018077</h5>
            <a
              href="https://api.whatsapp.com/send?phone=992904018077"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea maxLength="200" name="message" rows="7" required></textarea>
          <button
            disabled={disableBtn}
            type="submit"
            className="btn btn-primary"
          >
            Send Message
          </button>
          {sent && <h2 className="sent">Message sent</h2>}
        </form>
      </div>
    </section>
  );
};

export default Contacts;
