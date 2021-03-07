//페이지 공통된 것 처리
//index,profile,signup의 부모 역할! Component에 들어가게 됨
import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

//proptypes 점검으로 로 안전성 높일 수 있음
App.protypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(App);
