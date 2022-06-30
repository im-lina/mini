import React from "react";

import "../css/Main.css";
import "../css/Login.css";

export default function Login() {
  // fetch("api/getStandardInfoSvc")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log("error:", error));

  return (
    <>
      <div className="login_page">
        <div className="title_section">
          <span className="login_title_for">자취생을 위한 앱</span>
          <span className="login_title_login">로그인</span>
        </div>
        <div className="name"></div>

        <div className="login_input_section">
          <div className="input_id_label">
            <div className="label-bg">
              <div className="label-bg_border"></div>
            </div>
            <div className="placeholder">
              <div className="text">ID</div>
              <div className="iconly_light"></div>
            </div>
          </div>
          <div className="input_password_label">
            <div className="label-bg">
              <div className="label-bg_border"></div>
            </div>
            <div className="placeholder">
              <div className="text">Password</div>
              <div className="iconly_light">
                <div className="iconly_password"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="forget_password">
          <span className="find_password">비밀번호 찾기</span>
        </div>
      </div>
      <div className="register_text_div">
        <span className="register_text">회원가입</span>
      </div>
    </>
  );
}
