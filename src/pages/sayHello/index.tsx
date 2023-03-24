import React, { useEffect, useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";
import { useSendEmail } from "hooks/query/useEmail";
import axios from "axios";
import { IconLoader } from "components";

export const SayHello: React.FC = () => {
  const history = useHistory();
  const { data, loading } = useSendEmail();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [menu, setMenu] = useState(false);
  const [isLoading, setIsLoading] = useState("");

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
    try {
      setIsLoading("loading");
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
      console.log(res);
      setMessage("");
      setEmail("");
      setName("");
      setIsLoading("sent");
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
            <img
              src="/images/responsive-menu.svg"
              alt="responsive-menu"
              className="responsive-menu"
              onClick={() => setMenu(!menu)}
            />
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
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/edcsquared/"
                    >
                      <img src="/images/linkedin.png" alt="linkedin-icon" />
                    </a>
                  </div>
                  <div className="say-hello-page-socials-item">
                    <a target="_blank" href="https://www.instagram.com/edcsq/">
                      <img src="/images/instagram.png" alt="instagram-icon" />
                    </a>
                  </div>
                  <div className="say-hello-page-socials-item">
                    <a
                      target="_blank"
                      href="https://www.tiktok.com/@edcsquared"
                    >
                      <img src="/images/tiktok.png" alt="tiktok-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {menu && (
              <div className="say-hello-menu">
                <div className="say-hello-menu-option-container">
                  <div
                    className="say-hello-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Landing)}
                  >
                    Home
                  </div>
                  <div
                    className="say-hello-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Creators)}
                  >
                    For Creators
                  </div>
                  <div
                    className="say-hello-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Brands)}
                  >
                    For Brands
                  </div>
                  <div
                    className="say-hello-menu-option"
                    onClick={() => history.push(UnAuthRoutes.SayHello)}
                    style={{ color: "#D9D9D9" }}
                  >
                    Say Hello
                  </div>
                  <div
                    className="login-signup"
                    onClick={() => history.push(UnAuthRoutes.HomePageLogin)}
                  >
                    Login / Sign UP
                  </div>
                  <div className="say-hello-menu-img-container">
                    <div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/edcsquared/"
                      >
                        <img
                          src="/images/linkedin.png"
                          alt="linkedin-icon"
                          className="say-hello-menu-img"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/edcsq/"
                      >
                        <img
                          src="/images/instagram.png"
                          alt="instagram-icon"
                          className="say-hello-menu-img"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.tiktok.com/@edcsquared"
                      >
                        <img
                          src="/images/tiktok.png"
                          alt="tiktok-icon"
                          className="say-hello-menu-img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="say-hello-content-container">
            <div className="say-hello-page-body">
              <div className="say-hello-page-title">Let’s talk!</div>
              <div className="say-hello-ask">
                Ask us anything or just say hi...
              </div>
              <div className="say-hello-edc" onClick={openContactUs}>
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

              {isLoading === "sent" && (
                <div className="say-hello-sent-message">
                  Thanks for dropping us a note, we will get back to you
                  shortly.
                </div>
              )}

              {isLoading === "loading" && <IconLoader sayHello="-40px" />}
              <div className="send-message-btn-container">
                <div onClick={handleSend} className="send-message-btn">
                  Send Message
                </div>
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
          <a
            target="_blank"
            href="https://www.linkedin.com/company/edcsquared/"
          >
            <img src="/images/landing-linkedin.svg" />
          </a>
          <a target="_blank" href="https://www.instagram.com/edcsq/">
            <img src="/images/landing-insta.svg" />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@edcsquared">
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
