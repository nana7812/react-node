import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import AppLayout from "../components/AppLayout";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  //다시 로딩
  // useEffect(() => {
  //   function onScroll() {
  //     if (
  //       window.scrollY + document.documentElement.clientHeight >
  //       document.documentElement.scrollHeight - 300
  //     ) {
  //       if (hasMorePost && !loadPostsLoading) {
  //         dispatch({
  //           type: LOAD_POSTS_REQUEST,
  //           data: mainPosts[mainPosts.length - 1].id,
  //         });
  //       }
  //     }
  //   }
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [mainPosts, hasMorePost, loadPostsLoading]);

  useEffect(() => {
    //내가 스크롤해서 어느 정도 위치에 있는지 판단
    function onScroll() {
      //높이 1- 위에서 부터 얼마나 내렸는지 2-화면에 보이는 부분 길이 3- 총 길이
      //1+2 = 3 -> 끝까지 내렸는지 알 수 있음
      //console.log(window.scrollY,document.documentElement.clientHeight,document.documentElement.scrollHeight);
      //밑에서 300px 남았을 때 추가
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          //로딩되고 있는게 아닐때
          dispatch({
            type: LOAD_POSTS_REQUEST,
          });
        }
      }
    }
    //스크롤 이벤트 리스너
    window.addEventListener("scroll", onScroll);
    //**return**   없애주기  안해주면 메모리에 쌓여있음
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);
  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
    </AppLayout>
  );
};

export default Home;
