import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      //리액트에서 배열 사용시 key 붙어야힘
      actions={[
        <div key="twit">
          짹쨱
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followings">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="Amin" />
      <Button onClick={onLogOut}> 로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
