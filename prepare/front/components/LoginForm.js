import React, { useState, useCallback, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  //   const [id, setId] = useState("");
  //   const [password, setPassword] = useState("");

  //   const onChangeId = useCallback((e) => {
  //     setId(e.target.value);
  //   }, []);
  //   const onChangePassword = useCallback((e) => {
  //     setPassword(e.target.value);
  //   }, []);
  //   //비슷한 코드는 커스텀 훅으로 ~~

  const onsubmitForm = useCallback(() => {
    //e.prventDefault(); antd는 이거 이미 적용되어 있음
    console.log(id, password);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onsubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required></Input>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        ></Input>
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
      <div></div>
    </FormWrapper>
  );
};

//props 안쓰고 중앙 저장소 사용
// LoginForm.propTypes = {
//   setIsLoggedIn: PropTypes.func.isRequired,
// };
export default LoginForm;
