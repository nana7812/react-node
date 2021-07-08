import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";

//antd styledComponent
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

//gutter에서 발생하는 문제 해결 antd 고유 문제 해결
const Global = createGlobalStyle`
  .ant-row{
    margin-right: 0 !important;
    margin-left :0 !important;
  }

  .ant-col:first-child{
    padding-left : 0 !important;
  }

  .ant-col:last-child{
    padding-left: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  //아직 data가 없기 때문에 dummy사용
  //이제 중앙 저장소  사용하기 때문에 useState 컴포넌트 별로 관리 할 필요 없음
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  //const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  //is LoggedIN 바뀌면 알아서 리 렌더링

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
          {/* <Input.Search enterButton style={{ verticalAlign: "middle" }} /> */}
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {" "}
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://blog.naver.com/zcjswkz0812"
            target="_blank"
            rel="noreferrer noopener"
          >
            아민 블로그
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
