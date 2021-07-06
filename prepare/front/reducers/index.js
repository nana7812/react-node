import ActionButton from "antd/lib/modal/ActionButton";

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpDate: {},
    loginDate: {},
  },
  post: {
    mainPosts: [],
  },
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data: data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

// A~ C까지는 이해용
//A
//중앙 저장소
// const initialState = {
//     name:'amin',
//     age:25,
//     password:'1234',

// };

//action(객체) 생성
// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'jung',
// }

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'juna',
// }

//비효율적 -> [action creator]액선 생성 함수를 이용하자
// const changeNickname = (data) =>{
//     return {
//         type: 'CHANGE_NICKNAME',
//         data:data,
//     }
// };
//C

//(이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (ActionButton.type) {
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
