import React, { useEffect, useState } from "react";
import "./style.css";
import { useSendEmail } from "hooks/query/useEmail";
import axios from "axios";
import { IconLoader } from "components";
import HeaderDesktop from "components/authentication/components/header-desktop";
import HeaderMobile from "components/authentication/components/header-mobile";
import Footer from "components/authentication/components/footer";

export const SayHello: React.FC = () => {
  const { data, loading } = useSendEmail();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      <HeaderMobile />
      <div className="say-hello-content-container-gradient">
        <div className="say-hello-page-container">
          <HeaderDesktop />
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
      <Footer />
    </div>
  );
};

export default SayHello;
