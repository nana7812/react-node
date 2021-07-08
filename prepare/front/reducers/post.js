export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "아민",
      },
      content: "첫 번째 게시글 #해시태그 # 익스프레스",
      Images: [
        {
          src:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDFfMTUg%2FMDAxNjI1MTE3MjY2NTgx.OWcyyjzjwEbXAITwROfEtSAR3c_3nwxAevS20PctNsgg.UK0xaxSiFeHEK-Fny5sKY7Cdv7yEOJCJ1-4NS4S_5VAg.PNG.hyup_365%2Fimage.png&type=a340",
        },
        {
          src:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjlfNSAg%2FMDAxNjI0OTE2NjY1NDYz.zTYsJ2hiH43VwiR-oOTeNQc02L0gAtkOSoq3d4t_1Cwg.C3bHEXUT76chFki9OrXYf_6Tb8-D4C3DZlc-1sX1lNUg.PNG.dorun_lab%2FContents_Frame%25281080X1080%2529.png&type=a340",
        },
        {
          src:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160328_76%2F1eunnue_1459164099849AijQI_JPEG%2F%25C4%25B3%25B8%25AF%25C5%25CD_%25289%2529.jpg&type=sc960_832",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "amin",
          },
          content: "우와 신기하다",
        },
        {
          User: {
            nickname: "am",
          },
          content: "우와 수요일",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST"; //오타 방지

export const addPost = {
  type: ADD_POST,
};

const dummpyPost = {
  id: 2,
  User: {
    id: 2,
    nickname: "더미",
  },
  content: "더미 데이터 게시글 #해시태그 # 익스프레스",
  Images: [
    {
      src:
        "https://postfiles.pstatic.net/MjAyMTAyMTZfMTE4/MDAxNjEzNDAxNDI0MDQ3.wE85KV2Oj0qDsCQcLzzkUX0te85iu9axBfv-u29f6Ggg.ZrCK2gsHTidwlEdGRNnLYeJf8T8td1CXwL7EgvHu6Uog.JPEG.zcjswkz0812/IMG_2683.jpg?type=w966",
    },
    {
      src:
        "https://postfiles.pstatic.net/MjAyMTAyMTZfMzAg/MDAxNjEzNDAxNDIyMjYy.iF1C2Htw4K1x70_BAubG32fodXAgY2GFdw3udMjlS5Eg.xsrMd6c9NqrpnMus02PkjtcSAvhTs8mWfv20BVlpTuEg.JPEG.zcjswkz0812/IMG_2640.jpg?type=w966",
    },
    {
      src:
        "https://postfiles.pstatic.net/MjAyMTAyMTZfMjM1/MDAxNjEzNDAxNDIxNTE4.x3yaMnKDCl0ZQ-7YNrxrF8RgqyhkkuU7DR5gDV_FF-Yg.c6EsGYqzXzMvEKM_vHbAbc7A0MeBIcLfC76wYvZz0t8g.JPEG.zcjswkz0812/IMG_2642.jpg?type=w966",
    },
  ],
  Comments: [
    {
      User: {
        nickname: "amin",
      },
      content: "더미신기하다",
    },
    {
      User: {
        nickname: "am",
      },
      content: "더미 수요일",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummpyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
