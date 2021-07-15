export const initialState = {
  isLoggingIn: false, //로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false, //로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data: data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: "LOG_OUT_REQUEST",
    data: data,
  };
};

// export const logoutSuccessAction = () => {
//   return {
//     type: "LOG_OUT_SUCCESS",
//   };
// };

// export const logoutFailureAction = () => {
//   return {
//     type: "LOG_OUT_FAILURE",
//   };
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case "LOG_IN_REQUEST":
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: "zerocho" },
      };
    case "LOG_IN_FILURE":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };

    case "LOG_OUT_REQUEST":
      return {
        ...state,
        isLoggingOut: true,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
        isLoggingOut: false,
        me: null,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        isLoggingOut: false,
      };
  }
};

export default reducer;
