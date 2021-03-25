import React from "react";

// import "../component/Introduction.css";

import useStyles from '../component/IntroductionCss'

function Introduction(props) {

  const classes = useStyles()

  return (
    <div className="wrapper">
      <div className={classes.title}>
        <img src={require("../../images/title_01.jpg").default} alt='title img' className={classes.title_img} />
        <p className={[classes.title_p, classes.bold].join(' ')}>회사소개</p>
      </div>
      <div className={classes.history}>
        <span className={[classes.bold, classes.purple, classes.history_span].join(' ')}>역사와 전통,</span>
        <span className={[classes.bold, classes.purple, classes.history_span].join(' ')}>
          IT교육을 선도하는 실무중심 교육기관
        </span>
      </div>
      <div className={classes.intro}>
        <div className={classes.img_robot}>
          <img src={require("../../images/company0.png").default} alt='image robot' />
        </div>
        <div className={classes.intro_text}>
          <div className={classes.logo}>
            <img src={require('../../images/logo.png').default} alt='img logo' />
            <span>회사소개 및 설립 목적</span>
          </div>
          <div className={classes.intro_p}>
            <div className={classes.line}>
              본 교육기관은 1983년 벤처기업 1호로 창업해 디지털 시대를 선도하는
            </div>
            <div className={classes.line}>
              (주) 비트컴퓨터가 [기술은 나눌수록 커진다] [우수한 인재를 양성해
              사회에 환원하겠다] 는 목적으로 설립하였습니다.
            </div>
            <div className={classes.line}>
              따라서 기관장은 국내 최고의 IT전문가로 정부 정책의 방향을 이해하고
              공감하며
            </div>
            <div className={classes.line}>
              산업체가 필요로 하는 인재를 양성하기 위해 양질의 훈련과정을
              운영하고 있습니다.
            </div>
            <div className={classes.line}>
              더불어 ‘한국 소프트웨어 산업 협회’ 회장 활동 등 국내 SW산업의
              건전한 발전과 진흥을 목적으로
            </div>
            <div className={[classes.line, classes.bold].join(' ')}>
              SW산업에 대한 인식제고와 SW산업정책, 제도분야의 개선을 위해
              다각적인 활동을 하고 있습니다.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={[classes.business, classes.bold].join(' ')}>주요 사업 및 실적</div>
          <div className={classes.business_after}>1990 ~ 현재</div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.tradition}>
          <div>
            <img src={require("../../images/company2.jpg").default} alt />
          </div>
          <div>
            <ul>
              <li>1990년부터 전통과 역사가 있는 비트 수료생 배출</li>
              <li>
                과학기술정보통신부 [혁신성장청년인재집중양성사업] 3년 수행기관
              </li>
              <li>
                과학기술정보통신부 SW전문인력양성기관 (자바, 임베디드, 빅데이터,
                AI, 자율주행 등)
              </li>
              <li>2018~현재 서울시 뉴딜일자리 정책사업 수행</li>
              <li>고용노동부 국가기간 전략산업직종 훈련 운영중</li>
              <li>국내 및 해외 취업지원</li>
              <li>2019년 고용노동부 인증평가 우수훈련기관 선정</li>
              <li>고용노동부 3년 인증기관</li>
              <li>고용노동부 이수자평가 A등급 기관</li>
              <li>지식경제부 SW 핵심역량강화 우수과정 선정</li>
              <li>실업대책추진 공로표창상 수상(국무총리상)</li>
              <li>그룹스터디 및 프로젝트 중심의 실무 교육과정 진행</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={[classes.section_title, classes.bold].join(' ')}>IT 전문인력 양성</div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.train}>
          <div className="step">
            <div className="content6_img">
              <img src={require("../../images/company3.png").default} alt />
            </div>
            <div className={[classes.step_num, classes.coral, classes.bold].join(' ')}>01</div>
            <div className={[classes.step_title, classes.coral, classes.bold].join(' ')}>맞춤형 전문인력 양성</div>
            <div className={classes.step_content}>
              <div>산업 현장의 인력 해소 및</div>
              <div>기업 경쟁력 강화</div>
            </div>
          </div>
          <div className="step">
            <div className="content6_img">
              <img src={require("../../images/company4.png").default} alt />
            </div>
            <div className={[classes.step_num, classes.coral, classes.bold].join(' ')}>02</div>
            <div className={[classes.step_title, classes.coral, classes.bold].join(' ')}>융합형 전문인력 양성</div>
            <div className={classes.step_content}>
              <div>인공지능 분야의 타 산업</div>
              <div>
                융합을 통한 산업 경쟁력 강화
              </div>
            </div>
          </div>
          <div className="step">
            <div className="content6_img">
              <img src={require("../../images/company5.png").default} alt />
            </div>
            <div className={[classes.step_num, classes.coral, classes.bold].join(' ')}>03</div>
            <div className={[classes.step_title, classes.coral, classes.bold].join(' ')}>리더급 전문인력 양성</div>
            <div className={classes.step_content}>
              <div>인공지능 분야 해외시장</div>
              <div>
                진출 등을 통한 국가 경쟁력 강화
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={[classes.section_title, classes.bold].join(' ')}>비트캠프의 슬로건</div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.slogan}>
          <div>
            <div className={classes.slogan_img_before}>
              <img src={require("../../images/company_mark.jpg").default} alt />
            </div>
            <div className={classes.slogan_main}>
              <span>기술은 나눌수록</span> 커진다.
            </div>
            <div className={classes.slogan_main_after}>
              <span>우수한 인재를</span> 양성하여
              <span>사회에</span> 환원한다.
            </div>
            <div className={classes.slogan_img}>
              <img src={require("../../images/company_font.jpg").default} alt />
            </div>
            <div className={classes.slogan_ex}>
              Technology grows as it is divided. <br />
              cultivate talented people and give them back to society.<br />
              Bit Camp Preparing for the Top
            </div>
          </div>
          <div className={classes.slogan_img_main}>
            <img src={require("../../images/company6.png").default} alt />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Introduction;
