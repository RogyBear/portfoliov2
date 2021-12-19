import React, { useState, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../contexts/LanguageContext";
import { Waypoint } from "react-waypoint";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
export default function Contact() {
  const { lang, english, russian } = useContext(LanguageContext);
  const en = english.contact;
  const ru = russian.contact;
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(false);
  const [disable, setDisable] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [email, setEmail] = useState({});
  let specialAnimation;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setDisable(true);
    axios
      .post(`https://young-retreat-20252.herokuapp.com/email`, email)
      .then((res) => {
        setLoading(false);
        setMsg(true);
      })
      .catch((err) => {});
  };

  const handleWaypointEnter = () => {
    setAnimation((prevState) => ({ ...prevState, fadeInLeft: true }));
  };

  //Nested Ternary Operator for bottom title
  if (animation) {
    //if ENG
    if (lang) {
      specialAnimation = "contact__title__bottom-en fade-in-right";
    } else {
      specialAnimation = "contact__title__bottom-ru fade-in-right ";
    }
  } else {
    // if RUS
    if (lang) {
      specialAnimation = "contact__title__bottom-en ";
    } else {
      specialAnimation = "contact__title__bottom-ru ";
    }
  }

  const override = css`
    display: block;
    margin-left: 10px;
    border-color: #f0f0f0;
  `;

  return (
    <div className="contact" id="contact">
      <div className="contact__wrapper">
        <div className="contact__title">
          <div
            className={
              animation
                ? "contact__title__top fade-in-left"
                : "contact__title__top "
            }
            style={animation ? {} : { opacity: 0 }}
          >
            <span className="contact__title__outline">
              {lang ? en.c : ru.c}
            </span>
            {lang ? en.on : ru.on}-
          </div>

          <Waypoint onEnter={handleWaypointEnter}>
            <div
              className={specialAnimation}
              style={animation ? {} : { opacity: 0 }}
            >
              {lang ? en.ta : ru.ta}
              <span className="contact__title__outline">
                {lang ? en.c : ru.c}
              </span>
              {lang ? en.t : ru.t}
            </div>
          </Waypoint>

          <div
            className={
              animation ? "contact__line width-expand" : "contact__line "
            }
          />
          <p className="contact__email">
            <a
              className="contact__email__link"
              href="mailto:hi@aaronrogers.io?subject=I'm Interested In Working With You"
            >
              hi@aaronrogers.io
            </a>
          </p>
          <ul className="contact__btns">
            <li className="contact__btns__items">
              <a href="https://www.github.com/rogybear">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <title>Github</title>
                  <path d="M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z" />
                </svg>
              </a>
            </li>
            <li className="contact__btns__items">
              <a href="https://www.linkedin.com/in/aaron-rogers-2a497a194/">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <title>LinkedIn</title>
                  <path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z" />
                  <path d="M2 12h6v18h-6v-18z" />
                  <path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z" />
                </svg>
              </a>
            </li>
            <li className="contact__btns__items">
              <a href="tg://resolve?domain=@aaron_rogers">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <title>Telegram</title>
                  <path d="M31.88 5.053l-4.813 22.733c-0.333 1.613-1.307 2-2.667 1.253l-7.333-5.427-3.547 3.427c-0.4 0.4-0.733 0.747-1.467 0.747-0.96 0-0.8-0.36-1.12-1.267l-2.533-8.253-7.267-2.267c-1.573-0.467-1.587-1.547 0.347-2.333l28.347-10.933c1.293-0.573 2.533 0.32 2.053 2.32z" />
                </svg>
              </a>
            </li>
            <li className="contact__btns__items">
              <a href="https://api.whatsapp.com/send?phone=19712161331">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <title>Whatsapp</title>
                  <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            required
            className="contact__form__input"
            onChange={handleChange}
            name="name"
            autoComplete={"off"}
            autoComplete={"new-password"}
            disabled={!disable ? false : true}
            placeholder={lang ? en.name : ru.name}
          />
          <input
            type="email"
            required
            className="contact__form__input"
            onChange={handleChange}
            name="to"
            autoComplete={"off"}
            autoComplete={"new-password"}
            disabled={!disable ? false : true}
            placeholder={lang ? en.email : ru.email}
          />
          <input
            required
            type="text"
            className="contact__form__input"
            onChange={handleChange}
            name="subject"
            autoComplete={"off"}
            disabled={!disable ? false : true}
            placeholder={lang ? en.subject : ru.subject}
          />
          <textarea
            required
            autoComplete={"off"}
            className="contact__form__textarea"
            onChange={handleChange}
            name="text"
            disabled={!disable ? false : true}
            placeholder={lang ? en.message : ru.message}
          />
          {!msg ? (
            <button
              type="submit"
              className="contact__form__submit"
              style={{ transition: "300ms" }}
            >
              {lang ? en.submit : ru.submit}{" "}
              <ClipLoader css={override} size={30} loading={loading} />
            </button>
          ) : (
            <div
              className="contact__form__submit fade-in"
              style={
                lang
                  ? { cursor: "default", transition: "300ms" }
                  : {
                      cursor: "default",
                      transition: "300ms",
                      textTransform: "initial",
                    }
              }
            >
              {lang ? en.send : ru.send}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
