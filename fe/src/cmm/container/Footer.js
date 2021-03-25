import React from "react";
import "../component/Footer.css";

const openChat = document.querySelector(".popupchat");
const btnScrollTop = document.querySelector(".topheader__btn");

const hanldeOpenMess = () => {
  openChat.style.display = "block";
};

const hanldeCloseMess = () => {
  openChat.style.display = "none";
};

const handleBtnTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        {/* Title */}
        <div className="footer__content-title">
          <h5>Bitcamp representative inquiry</h5>
          <h5>080-861-0909</h5>
        </div>
        {/* Infor */}
        <div className="footer__content-infor">
          <div className="infor__left">
            <h5>
              * For administrative work of existing students, please contact the
              relevant center.
            </h5>
            <ul>
              <li>Seocho Main Garden</li>
              <li>02. 3486. 9600</li>
              <li>Sinchon Center</li>
              <li>02. 707. 1480</li>
            </ul>
            <ul>
              <li>Gangnam Center</li>
              <li>02. 3453. 5404</li>
              <li>Jongno Center</li>
              <li>02. 722. 1481</li>
            </ul>
            <ul>
              <li>weekday</li>
              <li>AM 09:00-PM 18:30</li>
              <li>Saturdays, Sundays, and holidays</li>
              <li>AM 09:00-PM 18:00</li>
            </ul>
          </div>
          <div className="infor__right">
            <div className="infor__right-icon1">
              <img src="./images/ft_icon1.png" alt="icon 1" />
            </div>
            <div className="infor__right-icon2">
              <img src="./images/ft_icon2.png" alt />
            </div>
          </div>
        </div>
        <hr className="hrfooter" />
        <div className="footer__content-company">
          <div className="footer__left">
            <p>
              Bit Camp ｜ 459 Gangnam-daero, Seocho-gu, Seoul (Seocho-dong,
              Baekam Building) ｜ Business Registration Number: 214-85-24928
            </p>
            <p>
              Bit Computer Co., Ltd. Seo Cho Bonwon CEO: Cho Hyun-jung ｜
              Inquiries : 02-3486-9600 ｜ Fax: 02-6007-1245
            </p>
            <p>
              Mail-order business report number: Seocho-00098 ｜ Personal
              information protection manager: Choi Jong- jin
            </p>
          </div>
          <div className="footer__right">
            <img src={require("../../images/logo.png").default} alt />
          </div>
        </div>
        <div className="footer__content-btn">
          <div className="footer__buton-left">
            <button>Privacy Policy</button>
            <button>Terms of Use</button>
            <button>Directions</button>
          </div>
          <div className="footer__copyright">
            <p>Copyright (c) Bitcamp All rights reserved.</p>
          </div>
        </div>
      </div>
      {/* message chatbox */}
      <div className="mess" onClick={hanldeOpenMess}>
        <i className="fas fa-comment-dots" />
      </div>
      {/* popup chat message */}
      <div className="popupchat">
        <div className="popupchat__content">
          <div className="popupchat__content-title">
            <div>
              <h5>Beat camp</h5>
            </div>
            <div>
              <i className="fas fa-cog" />
              <i
                className="fas fa-times"
                id="closeChat"
                onClick={hanldeCloseMess}
              />
            </div>
          </div>
          <div className="popupchat__content-active">
            <div className="popupchat__active">
              <h5>Available</h5>
              <p>Replies within an hour</p>
            </div>
            <div className="popupchat__online">
              <div>
                <img
                  src={require("../../images/available_1.png").default}
                  alt
                />
              </div>
              <div>
                <img
                  src={require("../../images/available_2.png").default}
                  alt
                />
              </div>
              <div>
                <img
                  src={require("../../images/available_3.png").default}
                  alt
                />
              </div>
              <div>
                <img
                  src={require("../../images/available_4.png").default}
                  alt
                />
              </div>
            </div>
          </div>
          <div className="startchat">
            <div className="startchat__title">
              <img src={require("../../images/startchat.png").default} alt />
              <div>
                <h5>Bitcamp</h5>
                <p>Welcome! How can I help you today?</p>
              </div>
            </div>
            <div className="startchat__btn">
              <button>
                <p>
                  <i className="fas fa-play" /> Start a new chat
                </p>
              </button>
            </div>
          </div>
          <div className="link">
            <div className="link__icon">
              <i className="fas fa-link" />
            </div>
            <div className="link__hover">
              <p>Chat link copy: bitcamp1:chann...</p>
            </div>
          </div>
        </div>
        <div className="popupchat__bottom">
          <p>
            <i className="far fa-comment-dots" /> Powered by{" "}
            <span>Channel.io</span>
          </p>
        </div>
      </div>
      {/* topheader */}
      <div className="topheader">
        <div className="topheader__call">
          <img src={require("../../images/call_quick.png").default} alt />
        </div>
        <div className="topheader__btn" onClick={handleBtnTop}>
          <i className="fas fa-arrow-up" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
