import React from "react";
import "../component/Employment.css";

function Employment(props) {
  return (
    <div className="employ">
      <div className="title">
        <img
          src={require("../../images/title_03.jpg").default}
          alt="hinh anh tuong trung"
        />
        <p className="title_main bold">Employment and Startup Support Center</p>
      </div>
      <div className="container">
        <div className="content1">
          <div className="content1_left">
            <img
              src={require("../../images/local_img1.jpg").default}
              alt="hinh anh tuong trung"
            />
          </div>
          <div className="content1_right">
            <img
              src={require("../../images/local_num1.jpg").default}
              alt="hinh anh tuong trung"
            />
            <div className="title_content1 bold">
              IT domestic and overseas employment and start-up organizations
            </div>
            <div className="desc_content1">
              The Bitcamp Employment and Startup Support Center actively
              supports the graduates' job hunting by matching talents necessary
              for various IT jobs with companies. In addition, we provide a
              specific start-up consulting process to graduates who are
              preparing for domestic and overseas start-ups.
            </div>
          </div>
        </div>
        <div className="content2">
          <div className="content2_left">
            <img
              src={require("../../images/local_num2.jpg").default}
              alt="hinh anh tuong trung"
            />
            <div className="title_content2 bold">IT job matching program</div>
            <div className="desc_content2">
              We operate a talent pool of 50,000 people from current students
              and graduates with experience in development, and supply talent to
              more than 800 affiliated companies. We provide a job matching
              program for current students, as we have a personalized
              job-specific program for graduates and experienced students, as we
              have a process and TOOl for achievement and career development. In
              addition, the demand for overseas IT manpower, especially for
              programmers and SW development manpower, is high, so we promote
              manpower development and have a number of companies and employment
              support infrastructure.
            </div>
          </div>
          <div className="content2_right">
            <img
              src={require("../../images/local_img2.jpg").default}
              alt="hinh anh tuong trung"
            />
          </div>
        </div>
        <div className="content3">
          <div className="content3_left">
            <img
              src={require("../../images/local_img3.jpg").default}
              alt="hinh anh tuong trung"
            />
          </div>
          <div className="content3_right">
            <img
              src={require("../../images/local_num3.jpg").default}
              alt="hinh anh tuong trung"
            />
            <div className="title_content3 bold">Mentoring operation</div>
            <div className="desc_content3">
              We support face-to-face and non-face-to-face mentoring services
              through specialized mentor pools specialized in each field, such
              as employment, entrepreneurship, and government tasks. Based on
              the rich experience and know-how of venture companies in various
              fields, we diagnose the technical management difficulties of
              entrepreneurs with innovative technologies and present solutions.
            </div>
          </div>
        </div>
        <div className="content4">
          <div className="content4_left">
            <img
              src={require("../../images/local_num4.jpg").default}
              alt="hinh anh tuong trung"
            />
            <div className="title_content4 bold">Online Offline Seminar</div>
            <div className="desc_content4">
              Bit entrepreneurs or experts in each field are invited to provide
              a place to communicate with current students by telling stories of
              seniors in the field.
            </div>
          </div>
          <div className="content4_right">
            <img
              src={require("../../images/local_img4.jpg").default}
              alt="hinh anh tuong trung"
            />
          </div>
        </div>
        <div className="content5">
          The Employment Startup Support Center service is
          <span className="coral bold">
            a service that is supported only for new graduates and graduates .
          </span>
        </div>
        <div className="content6">
          <div className="title_content6 bold">Content to be together</div>
          <div className="body_content6">
            <div className="body6_p1">
              <div className="line1">
                <img src={require("../../images/body1.png").default} />
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
                <img src={require("../../images/body2.png").default} />
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
                <img src={require("../../images/body3.png").default} />
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

export default Employment;
