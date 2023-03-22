import React, { useEffect, useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";
import { useSendEmail } from "hooks/query/useEmail";
import axios from "axios";

export const SayHello: React.FC = () => {
  const history = useHistory();
  const { data, loading } = useSendEmail();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);

  const openContactUs = (): void => {
    window.location.href = "mailto:hello@edcsquared.io";
  };

  const handleSend = async (): Promise<void> => {
    const mailData = JSON.stringify({
      operationName: "SendEmail",
      variables: {
        data: {
          from: "adeeltahir1995@gmail.com",
          message: `${email}, ${message}`,
          name,
        },
      },
      query:
        "query SendEmail($data: EMAIL_INPUT) {\n  sendEmail(data: $data)\n}\n",
    });
    setSent(false);
    try {
      const res = await axios.post(
        "https://ibqmmfkfajfbvgtxmjzfx3u6rm.appsync-api.us-east-1.amazonaws.com/graphql",
        mailData,
        {
          headers: {
            "x-api-key": "da2-ndivz7milrarjolsdmpucfdelm",
            "Content-Type": "application/json",
          },
        }
      );
      setSent(true);
      console.log(res);
      setMessage("");
      setEmail("");
      setName("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!loading && data) {
      console.log(data);
    }
  }, [loading, data]);

  return (
    <div className="say-hello-page-wrapper">
      <div className="say-hello-content-container-gradient">
        <div className="say-hello-page-container">
          <div className="say-hello-page-navbar comingSoon">
            <div className="say-hello-page-logo">
              <img
                src="/images/edc-squared-landing-logo.svg"
                alt="edc-squared"
              />
            </div>
            <div className="say-hello-page-menu-header">
              <div className="say-hello-page-menu">
                <div
                  className="say-hello-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Landing)}
                >
                  Home
                </div>
                <div
                  className="say-hello-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Creators)}
                >
                  For Creators
                </div>
                <div
                  className="say-hello-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Brands)}
                >
                  For Brands
                </div>
                <div
                  className="say-hello-page-menu-items"
                  style={{ color: "#D9D9D9" }}
                >
                  Say Hello
                </div>
                <div
                  className="login-signup"
                  onClick={() => history.push(UnAuthRoutes.HomePageLogin)}
                >
                  Login / Sign up
                </div>

                <div className="say-hello-page-socials">
                  <div className="say-hello-page-socials-item">
                    <a href="https://www.linkedin.com/company/edcsquared/">
                      <img src="/images/linkedin.png" alt="linkedin-icon" />
                    </a>
                  </div>
                  <div className="say-hello-page-socials-item">
                    <a href="https://www.instagram.com/edcsq/">
                      <img src="/images/instagram.png" alt="instagram-icon" />
                    </a>
                  </div>
                  <div className="say-hello-page-socials-item">
                    <a href="https://www.tiktok.com/@edcsquared">
                      <img src="/images/tiktok.png" alt="tiktok-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="say-hello-content-container">
            <div className="say-hello-page-body">
              <div className="say-hello-page-title">Let’s talk!</div>
              <div className="ask-us-anything">
                Ask us anything or just say hi...
              </div>
              <div className="hello-edc" onClick={openContactUs}>
                hello@edcsquared.io
              </div>
            </div>
            <div className="say-hello-input-box">
              <div className="say-hello-input-container">
                <div className="say-hello-field-container">
                  <div className="say-hello-input-text">Name</div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name Surname"
                    className="say-hello-input name"
                  />
                </div>
                <div className="say-hello-field-container">
                  <div className="say-hello-input-text">Email</div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@address.com"
                    className="say-hello-input email"
                  />
                </div>
              </div>
              <div className="say-hello-field-container">
                <div className="say-hello-input-text">Message</div>
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi there..."
                  className="say-hello-input message"
                />
              </div>
              {sent && (
                <div className="say-hello-sent-message">
                  Thanks for sending message.
                </div>
              )}
              <div onClick={handleSend} className="send-message-btn">
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="say-hello-footer">
        <div className="say-hello-footer-text-container">
          <div
            className="say-hello-footer-text"
            onClick={() => history.push(UnAuthRoutes.Landing)}
          >
            Home
          </div>
          <div
            className="say-hello-footer-text"
            onClick={() => history.push(UnAuthRoutes.Creators)}
          >
            For Creators
          </div>
          <div
            className="say-hello-footer-text"
            onClick={() => history.push(UnAuthRoutes.Brands)}
          >
            For Brands
          </div>
          <div
            className="say-hello-footer-text"
            onClick={() => history.push(UnAuthRoutes.SayHello)}
          >
            Say Hello
          </div>
        </div>

        <div className="say-hello-footer-img-container">
          <a href="https://www.linkedin.com/company/edcsquared/">
            <img src="/images/landing-linkedin.svg" />
          </a>
          <a href="https://www.instagram.com/edcsq/">
            <img src="/images/landing-insta.svg" />
          </a>
          <a href="https://www.tiktok.com/@edcsquared">
            <img src="/images/landing-tiktok.svg" />
          </a>
        </div>

        <div className="say-hello-footer-text">
          © 2023 Copyright EDC Squared. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default SayHello;
