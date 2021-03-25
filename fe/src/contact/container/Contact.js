import React from "react";

import "../component/Contact.css";

function Contact(props) {
  return (
    <div id="contact">
      <div className="title">
        <img src={require("../../images/title_06.jpg").default} alt />
        <p className="title_main bold">CONTACT US</p>
      </div>
      <div className="container">
        <div className="content1">
          <div className="title_content1 bold">CONTACT US</div>
          <div className="body_content1">
            We are looking forward to partnering with Bitcamp talents. <br />
            If you are a company that wants to be affiliated, please leave an
            inquiry and we will contact you.
          </div>
          <form className="form">
            <div className="line1">
              <div className="company_name">
                <label htmlFor="com_name">Company name</label>
                <br />
                <input type="text" placeholder="Company name" required />
                <div className="com_name_required required" />
              </div>
              <div className="pic">
                <label htmlFor="com_name">Person in charge</label>
                <br />
                <input type="text" placeholder="Person in charge" />
              </div>
            </div>
            <div className="line2">
              <div className="contacts">
                <label htmlFor="com_name">Contact </label>
                <br />
                <div className="contact_input">
                  <input type="text" required />
                  <input type="text" required />
                  <input type="text" required />
                  <div className="contact_input1_required required" />
                  <div className="contact_input2_required required" />
                  <div className="contact_input3_required required" />
                </div>
              </div>
              <div className="email">
                <label htmlFor="com_name">E-mail</label>
                <br />
                <input type="text" placeholder="E-mail" />
              </div>
            </div>
            <div className="contents">
              <label htmlFor="Contents">Contents</label>
              <br />
              <textarea name id cols={30} rows={10} defaultValue={""} />
            </div>
            <div className="captcha">
              <div className="captcha__content">
                <p type="text" id="mainCaptcha" />
                <input type="text" id="txtInput" />
                <button
                  id="checkcap"
                  type="button"
                  value="Check"
                  onclick="alert(ValidCaptcha());"
                >
                  <i className="fas fa-check-circle" />
                </button>
                <button className="btn" id="refresh" onclick="Captcha();">
                  <i className="fas fa-sync-alt" />
                </button>
              </div>
              <div className="captcha__warning">
                <p>
                  Enter the number of automatic registration prevention numbers
                  in order.
                </p>
              </div>
            </div>
            <div className="write_agree">
              <div className="checkbox">
                <input type="checkbox" id="check" />
                <label htmlFor="check">I agree to the privacy policy</label>
                <label className="span" htmlFor="checkbox">
                  See More
                </label>
                <input type="checkbox" id="checkbox" hidden />
              </div>
            </div>
            <div className="btn_submit">
              <button type="submit" className="btn_complete">
                Completed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
