import React from "react";

import { Mobile, PC } from "./MediaQuery";

import "./css/Main.css";
import Login from "./components/Login";
import MySchedule from "./components/MySchedule";

const Main = (props) => {
  // fetch("api/getStandardInfoSvc")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log("error:", error));

  return (
    <>
      <div>
        {/* <Login /> */}
        <MySchedule />
      </div>

      {/* <div>
        <Mobile>
      <div className="mobile_container">
        <div className="group2253">
          <span className="text12">제품 검색</span>
          <img className="search1" alt="" src="img/Search.png" />
        </div>
        <div className="group2237">
          <div className="group2199">
            <span className="text11">품목별</span>
          </div>
        </div>

        <span className="text13">Internet Services</span>
        <span className="text14">Education</span>
        <span className="text15">Mobile Recharge</span>
        <span className="text16">Medical &amp; Dental</span>
        <span className="text17">Cable Tv</span>
        <span className="text18">Travel &amp; Tours</span>
        <span className="text19">Electricity</span>
        <span className="text20">eCommerce</span>
        <div className="popular_div">
          <div className="frame2234">
            <span className="text">UI Design</span>
          </div>
          <div className="frame2235">
            <span className="text01">Web Design</span>
          </div>
          <div className="frame2236">
            <span className="text02">Designer</span>
          </div>
          <div className="frame2237">
            <span className="text03">Design Covid 19</span>
          </div>
          <div className="frame2238">
            <span className="text04">UIUX</span>
          </div>
          <div className="frame2239">
            <span className="text05">UX Design</span>
          </div>
          <div className="frame2241">
            <span className="text06">Website</span>
          </div>
          <div className="frame2242">
            <span className="text07">COVID</span>
          </div>
          <div className="frame2243">
            <span className="text08">UIUX Designer</span>
          </div>
          <div className="frame2199">
            <span className="text09">인기 상품별</span>
            <span className="text10">전체보기</span>
          </div>
        </div>
        <div>
          <div className="bottombar-bottombar">
            <div className="bottombar-nav">
              <div className="bottombar-bottombar-wallet">
                <div className="bottombar-icon-outline-wallet">
                  <img
                    src="/playground_assets/02f5a772-f7f2-4b18-a359-1bda1d0a151c-sexw-200h.png"
                    alt="Rectangle4301I23352823331882595903"
                    className="bottombar-rectangle4301"
                  />
                  <img
                    alt="Line33I23352823331882595904"
                    src="/playground_assets/a944338f-5153-46c8-a298-5fc72d4835f6-mhrc.svg"
                    className="bottombar-svg"
                  />
                </div>
                <span className="bottombar-text">HOME</span>
              </div>
              <div className="bottombar-search">
                <div className="bottombar-icon18pxout">
                  <img
                    src="/playground_assets/df4aa362-71b0-49a7-b4eb-ecdc63dd3462-zf3w.svg"
                    alt="iconI23352825730962594292"
                    className="bottombar-icon"
                  />
                </div>
                <span className="bottombar-text1">장보기</span>
              </div>
              <div className="bottombar-bottombar-n-f-ts">
                <img
                  src="/playground_assets/ba1320bd-f1eb-453d-a868-b39d3bf4f886-x4c9.svg"
                  alt="FrameI23352823331842595436"
                  className="bottombar-frame"
                />
                <span className="bottombar-text2">일정</span>
              </div>
              <div className="bottombar-bottombar-statistic">
                <div className="bottombar-icon-outlinechartsquarebar">
                  <img
                    alt="IconI23352823331922596048"
                    src="/playground_assets/940c1ee0-97f7-43eb-8417-a90787290f7a-itjs.svg"
                    className="bottombar-svg1"
                  />
                  <img
                    src="/playground_assets/c62b22eb-e668-4823-8573-27987b75a7b4-un4-200h.png"
                    alt="Rectangle4301I23352823331922595937"
                    className="bottombar-rectangle43011"
                  />
                </div>
                <span className="bottombar-text3">TIP’S</span>
              </div>
              <div className="bottombar-bottombar-profile">
                <img
                  src="/playground_assets/a23bd225-8ba4-433a-964f-e81da06f2670-cjre.svg"
                  alt="FrameI23352823331962596123"
                  className="bottombar-frame1"
                />
                <span className="bottombar-text4">MY</span>
              </div>
            </div>
            <div className="bottombar-home-indicator">
              <div className="bottombar-home-indicatorwithe">
                <img
                  src="/playground_assets/a82aa6a6-5bc2-4384-a4ec-e37637472248-zazi.svg"
                  alt="HomeIndicatorI23352823330789240492134"
                  className="bottombar-home-indicator1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Mobile>
      </div> 

      {/* <div className="pc_container">
        <PC>모바일에서 활성화된 페이지 입니다.</PC>
      </div> */}
    </>
  );
};

export default Main;
