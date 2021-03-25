import React from "react";
import "../component/Overseas.css";

function Overseas(props) {
  return (
    <div id="oversea">
      <div className="title">
        <img
          src={require("../../images/title_03.jpg").default}
          alt="hinh anh tuong trung"
        />
        <p className="title_main bold">Overseas employment/start-up</p>
      </div>
      <div className="container">
        <div className="content1">
          <div className="title_content1 bold">
            Overseas employment/start-up
          </div>
          <div className="body_content1">
            <img
              src={require("../../images/blog.png").default}
              alt="hinh anh tuong trung"
            />
          </div>
        </div>
        <div className="content6">
          <div className="title_content6 bold">Content to be together</div>
          <div className="body_content6">
            <div className="body6_p1">
              <div className="line1">
                <img
                  src={require("../../images/body1.png").default}
                  alt="hinh anh tuong trung"
                />
              </div>
              <div className="line2">National Employment Support System</div>
              <div className="line3">
                <span>Master</span>
                <span>
                  <i className="far fa-clock" />
                  01-29
                </span>
                <span>
                  <i className="far fa-eye" />
                  76
                </span>
              </div>
              <div className="line4">
                <a href="#">
                  <span>Read more +</span>
                </a>
              </div>
            </div>
            <div className="body6_p2">
              <div className="line1">
                <img
                  src={require("../../images/body2.png").default}
                  alt="hinh anh tuong trung"
                />
              </div>
              <div className="line2">National Employment Support System</div>
              <div className="line3">
                <span>Master</span>
                <span>
                  <i className="far fa-clock" />
                  01-29
                </span>
                <span>
                  <i className="far fa-eye" />
                  76
                </span>
              </div>
              <div className="line4">
                <a href="#">
                  <span>Read more +</span>
                </a>
              </div>
            </div>
            <div className="body6_p3">
              <div className="line1">
                <img
                  src={require("../../images/body3.png").default}
                  alt="hinh anh tuong trung"
                />
              </div>
              <div className="line2 bold">
                National Employment Support System
              </div>
              <div className="line3">
                <span>Master</span>
                <span>
                  <i className="far fa-clock" />
                  01-29
                </span>
                <span>
                  <i className="far fa-eye" />
                  76
                </span>
              </div>
              <div className="line4">
                <a href="#">
                  <span>Read more +</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overseas;
