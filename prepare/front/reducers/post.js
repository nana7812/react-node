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
