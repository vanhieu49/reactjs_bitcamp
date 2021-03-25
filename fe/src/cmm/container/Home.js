import React from "react";
import "../component/Home.css";

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      {/* END HEADER */}
      {/* SIDERBAR */}
      <section className="siderbar">
        <div className="siderbar__top">
          <img
            src={require("../../images/visual1.jpg").default}
            alt="hinh anh bi loi "
          />
        </div>
        <div className="siderbar__center">
          <img
            src={require("../../images/visual2.jpg").default}
            alt="hinh anh bi loi "
          />
          <div className="siderbar__center-child">
            <ul>
              <li>
                <img
                  src={require("../../images/main_visual_banner1.jpg").default}
                  alt="hinh anh bi loi "
                />
              </li>
              <li>
                <img
                  src={require("../../images/main_visual_banner2.jpg").default}
                  alt="hinh anh bi loi "
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="siderbar__bottom">
          <img
            src={require("../../images/visual3.jpg").default}
            alt="hinh anh bi loi "
          />
          <div className="siderbar__bottom-controller">
            <i className="fas fa-angle-left" />
            <i className="fas fa-angle-right" />
          </div>
        </div>
      </section>
      {/* END SIDERBAR */}
      {/* CONTAINER */}
      <section className="container">
        {/* CURRICUL */}
        <div className="container__curricul">
          <div className="container__curricul-title">
            <div>
              <p>Curriculum being recruited</p>
            </div>
            <div>
              <button>See More +</button>
            </div>
          </div>
          <div className="curricul">
            <div className="curricul__list">
              {/* BOX */}
              <div className="curricul__box">
                <div className="curricul__box-image">
                  <img
                    src={require("../../images/curricul_image1.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="curricul__box-title">
                  <h5>Java Basic Lecture</h5>
                </div>
                <div className="curricul__box-detail">
                  <p>Start date| 2021-02-15</p>
                  <p>Training period| 2021-02-15 ~ 2021-02-1</p>
                </div>
                <div className="curricul_box-btn">
                  <button>Read More +</button>
                </div>
              </div>
              {/* BOX */}
              <div className="curricul__box">
                <div className="curricul__box-image">
                  <img
                    src={require("../../images/curricul_image2.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="curricul__box-title">
                  <h5>
                    Web developer training course C using deep learning based on
                    digital convergence
                  </h5>
                </div>
                <div className="curricul__box-detail">
                  <p>Start date| 2021-02-16</p>
                  <p>Training period| 2021-02-16 ~ 2021-07-12</p>
                </div>
                <div className="curricul_box-btn">
                  <button>Read More +</button>
                </div>
              </div>
              {/* BOX */}
              <div className="curricul__box">
                <div className="curricul__box-image">
                  <img
                    src={require("../../images/curricul_image2.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="curricul__box-title">
                  <h5>
                    Software web developer training course C using digital
                    convergence-based convergence technology
                  </h5>
                </div>
                <div className="curricul__box-detail">
                  <p>Start date| 2021-02-16</p>
                  <p>Training period| 2021-02-16 ~ 2021-07-12</p>
                </div>
                <div className="curricul_box-btn">
                  <button>Read More +</button>
                </div>
              </div>
              {/* BOX */}
              <div className="curricul__box">
                <div className="curricul__box-image">
                  <img
                    src={require("../../images/curricul_image2.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="curricul__box-title">
                  <h5>
                    Remote Utilization_Software web developer training course
                    using digital convergence based convergence technology A
                  </h5>
                </div>
                <div className="curricul__box-detail">
                  <p>Start date| 2021-02-22</p>
                  <p>Training period| 2021-02-22 ~ 2021-08-02</p>
                </div>
                <div className="curricul_box-btn">
                  <button>Read More +</button>
                </div>
              </div>
              {/* BOX */}
              <div className="curricul__box">
                <div className="curricul__box-image">
                  <img
                    src={require("../../images/curricul_image3.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="curricul__box-title">
                  <h5>
                    Remote Utilization_Digital Convergence Based Framework
                    Professional Developer Training Course A
                  </h5>
                </div>
                <div className="curricul__box-detail">
                  <p>Start date| 2021-03-02</p>
                  <p>Training period| 2021-03-02 ~ 2021-07-12</p>
                </div>
                <div className="curricul_box-btn">
                  <button>Read More +</button>
                </div>
              </div>
              {/* BOX */}
              <div className="curricul__box">
                <div className="curricul__box-image">
                  <img
                    src={require("../../images/curricul_image4.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="curricul__box-title">
                  <h5>
                    Remote Utilization_Digital Convergence Based Framework
                    Professional Developer Training Course A
                  </h5>
                </div>
                <div className="curricul__box-detail">
                  <p>Start date| 2021-03-02</p>
                  <p>Training period| 2021-03-02 ~ 2021-07-12</p>
                </div>
                <div className="curricul_box-btn">
                  <button>Read More +</button>
                </div>
              </div>
              {/* BOX */}
              <div className="curricul__box">
                <div className="curricul__box-image">
                  <img
                    src={require("../../images/curricul_image5.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="curricul__box-title">
                  <h5>
                    Remote Utilization_Digital Convergence-based Framework
                    Professional Developer Training Course B
                  </h5>
                </div>
                <div className="curricul__box-detail">
                  <p>Start date| 2021-03-15</p>
                  <p>Training period| 2021-03-15 ~ 2021-08-19</p>
                </div>
                <div className="curricul_box-btn">
                  <button>Read More +</button>
                </div>
              </div>
              {/* BOX */}
              <div className="curricul__box">
                <div className="curricul__box-image">
                  <img
                    src={require("../../images/curricul_image6.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="curricul__box-title">
                  <h5>
                    Remote Utilization_Digital Convergence-based Framework
                    Professional Developer Training Course B
                  </h5>
                </div>
                <div className="curricul__box-detail">
                  <p>Start date| 2021-03-15</p>
                  <p>Training period| 2021-03-15 ~ 2021-08-19</p>
                </div>
                <div className="curricul_box-btn">
                  <button>Read More +</button>
                </div>
              </div>
              {/* BOX */}
              <div className="curricul__box">
                <div className="curricul__box-image">
                  <img
                    src={require("../../images/curricul_image7.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="curricul__box-title">
                  <h5>
                    Remote Utilization_Digital Convergence Based Framework
                    Professional Developer Training Course A
                  </h5>
                </div>
                <div className="curricul__box-detail">
                  <p>Start date| 2021-04-05</p>
                  <p>Training period| 2021-04-05 ~ 2021-09-09</p>
                </div>
                <div className="curricul_box-btn">
                  <button>Read More +</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BANNER IMAGE */}
        <div className="imgbanner">
          <div className="imgbanner__content">
            <h5>Tomorrow to be with you</h5>
            <h6>From education to employment, join Bitcamp!</h6>
            <p>Go to the Employment and Startup Support Center +</p>
          </div>
        </div>
        {/* RECRUITMENT */}
        <div className="container__curricul">
          <div className="container__curricul-title">
            <div>
              <p>Recruitment Announcement</p>
            </div>
            <div>
              <button>See More +</button>
            </div>
          </div>
          <div className="requitment">
            <div className="requitment__list">
              {/* BOX */}
              <div className="requitment__box">
                <div className="requitment__box-image">
                  <img
                    src={require("../../images/recruitment.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="requitment__box-title">
                  <h5>Data Streams Inc.</h5>
                </div>
                <div className="requitment__box-detail">
                  <p>Posted on | 2021-02-05</p>
                  <p>Deadline | 2021-02-19</p>
                  <p>Position | Technical support and maintenance ...</p>
                </div>
              </div>
              {/* BOX */}
              <div className="requitment__box">
                <div className="requitment__box-image">
                  <img
                    src={require("../../images/recruitment_2.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="requitment__box-title">
                  <h5>Lime Company</h5>
                </div>
                <div className="requitment__box-detail">
                  <p>Posted on | 2021-02-03</p>
                  <p>Deadline | 2021-02-26</p>
                  <p>Position | JAVA Developer...</p>
                </div>
              </div>
              {/* BOX */}
              <div className="requitment__box">
                <div className="requitment__box-image">
                  <img
                    src={require("../../images/recruitment_3.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="requitment__box-title">
                  <h5>Bogo Information System Co., Ltd.</h5>
                </div>
                <div className="requitment__box-detail">
                  <p>Posted on | 2021-02-03</p>
                  <p>Deadline | 2021-02-09</p>
                  <p>Position | Big data analysis and Java development ...</p>
                </div>
              </div>
              {/* BOX */}
              <div className="requitment__box">
                <div className="requitment__box-image">
                  <img
                    src={require("../../images/recruitment_4.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="requitment__box-title">
                  <h5>Function Two Programming Co., Ltd.</h5>
                </div>
                <div className="requitment__box-detail">
                  <p> Posted on | 2021-02-02</p>
                  <p> Deadline | 2021-02-05</p>
                  <p>Position | JAVA Developer...</p>
                </div>
              </div>
              {/* BOX */}
              <div className="requitment__box">
                <div className="requitment__box-image">
                  <img
                    src={require("../../images/recruitment_5.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="requitment__box-title">
                  <h5>PPS Co., Ltd.</h5>
                </div>
                <div className="requitment__box-detail">
                  <p>Posted on | 2021-02-02</p>
                  <p>Deadline | Regular recruitment</p>
                  <p>Position | Visual AI, Python developer...</p>
                </div>
              </div>
              {/* BOX */}
              <div className="requitment__box">
                <div className="requitment__box-image">
                  <img
                    src={require("../../images/recruitment_6.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="requitment__box-title">
                  <h5>Interface Information Technology Co., Ltd.</h5>
                </div>
                <div className="requitment__box-detail">
                  <p>Posted on | 2021-02-05</p>
                  <p>Deadline | 2021-02-19</p>
                  <p>Position | Technical support and maintenance ...</p>
                </div>
              </div>
              {/* BOX */}
              <div className="requitment__box">
                <div className="requitment__box-image">
                  <img
                    src={require("../../images/recruitment_7.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="requitment__box-title">
                  <h5>Bowtech Co., Ltd.</h5>
                </div>
                <div className="requitment__box-detail">
                  <p> Posted on | 2021-02-02</p>
                  <p>Deadline | 2021-02-10</p>
                  <p>Position | JAVA Developer...</p>
                </div>
              </div>
              {/* BOX */}
              <div className="requitment__box">
                <div className="requitment__box-image">
                  <img
                    src={require("../../images/recruitment_8.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="requitment__box-title">
                  <h5>Nanum Solution Co., Ltd.</h5>
                </div>
                <div className="requitment__box-detail">
                  <p>Posted on | 2021-01-28</p>
                  <p>Deadline | Regular recruitment</p>
                  <p>Position | JAVA, Android/IOS ...</p>
                </div>
              </div>
              {/* BOX */}
              <div className="requitment__box">
                <div className="requitment__box-image">
                  <img
                    src={require("../../images/recruitment_9.png").default}
                    alt="hinh anh bi loi "
                  />
                </div>
                <div className="requitment__box-title">
                  <h5>Dreamsys Co., Ltd.</h5>
                </div>
                <div className="requitment__box-detail">
                  <p>Posted on | 2021-02-01</p>
                  <p>Deadline | Recruitment simplicity</p>
                  <p>Position | CDC Engineer...</p>
                </div>
              </div>
            </div>
          </div>
          {/* BLOG */}
          <div className="container__curricul">
            <div className="container__curricul-title">
              <div>
                <p>BLOG</p>
              </div>
              <div>
                <button>See More +</button>
              </div>
            </div>
            <div className="curricul">
              <div className="curricul__list">
                {/* BOX */}
                <div className="curricul__box">
                  <div className="curricul__box-image">
                    <img
                      src={require("../../images/blog.png").default}
                      alt="hinh anh bi loi "
                    />
                  </div>
                  <div className="curricul__box-title">
                    <h5>National Employment Support System</h5>
                  </div>
                  <div className="curricul__box-detail">
                    <p>
                      Master <i className="far fa-clock" /> 01-29{" "}
                      <i className="far fa-eye" />
                      83
                    </p>
                  </div>
                  <div className="curricul_box-btn">
                    <button>Read More +</button>
                  </div>
                </div>
                {/* BOX */}
                <div className="curricul__box">
                  <div className="curricul__box-image">
                    <img
                      src={require("../../images/blog_2.png").default}
                      alt="hinh anh bi loi "
                    />
                  </div>
                  <div className="curricul__box-title">
                    <h5>Tomorrow Learning Card</h5>
                  </div>
                  <div className="curricul__box-detail">
                    <p>
                      Master <i className="far fa-clock" /> 01-29{" "}
                      <i className="far fa-eye" />
                      91
                    </p>
                  </div>
                  <div className="curricul_box-btn">
                    <button>Read More +</button>
                  </div>
                </div>
                {/* BOX */}
                <div className="curricul__box">
                  <div className="curricul__box-image">
                    <img
                      src={require("../../images/blog_3.png").default}
                      alt="hinh anh bi loi "
                    />
                  </div>
                  <div className="curricul__box-title">
                    <h5>Bit Camp in response to Corona</h5>
                  </div>
                  <div className="curricul__box-detail">
                    <p>
                      Master <i className="far fa-clock" /> 01-28{" "}
                      <i className="far fa-eye" />
                      84
                    </p>{" "}
                  </div>
                  <div className="curricul_box-btn">
                    <button>Read More +</button>
                  </div>
                </div>
                {/* BOX */}
                <div className="curricul__box">
                  <div className="curricul__box-image">
                    <img
                      src={require("../../images/blog_4.png").default}
                      alt="hinh anh bi loi "
                    />
                  </div>
                  <div className="curricul__box-title">
                    <h5>Bit Camp Employment News</h5>
                  </div>
                  <div className="curricul__box-detail">
                    <p>
                      Master <i className="far fa-clock" /> 12-28{" "}
                      <i className="far fa-eye" />
                      410
                    </p>
                  </div>
                  <div className="curricul_box-btn">
                    <button>Read More +</button>
                  </div>
                </div>
                {/* BOX */}
                <div className="curricul__box">
                  <div className="curricul__box-image">
                    <img
                      src={require("../../images/blog_5.png").default}
                      alt="hinh anh bi loi "
                    />
                  </div>
                  <div className="curricul__box-title">
                    <h5>Basic lecture (Java lecture/Python special...</h5>
                  </div>
                  <div className="curricul__box-detail">
                    <p>
                      Master <i className="far fa-clock" /> 12-15{" "}
                      <i className="far fa-eye" />
                      613
                    </p>
                  </div>
                  <div className="curricul_box-btn">
                    <button>Read More +</button>
                  </div>
                </div>
                {/* BOX */}
                <div className="curricul__box">
                  <div className="curricul__box-image">
                    <img
                      src={require("../../images/blog_6.png").default}
                      alt="hinh anh bi loi "
                    />
                  </div>
                  <div className="curricul__box-title">
                    <h5>2020 SW Talent Festival...</h5>
                  </div>
                  <div className="curricul__box-detail">
                    <p>
                      Master <i className="far fa-clock" /> 11-07{" "}
                      <i className="far fa-eye" />
                      299
                    </p>
                  </div>
                  <div className="curricul_box-btn">
                    <button>Read More +</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BLOG */}
          {/* BACKGROUND BODY */}
        </div>
      </section>
      {/* <div class="bgbody">
    
    </div> */}
      {/* END CONTAINER */}
    </div>
  );
};

export default Home;
