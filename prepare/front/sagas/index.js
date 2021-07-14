import { all, fork, call, put, take } from "redux-saga/effects";
import axios from "axios";

//서버에 로그링인 하는 요청을 보냄
function logInAPI(data) {
  return axios.post("/api/login", data);
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

//put:dispatch
//이펙트들 앞에 yiedl하는 이유 test 할 때 편함 //동작이 제대로 하는지 보장할 수 있음 //제너레이터가 yield때문에 테스기하기 편함
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data); //API로 data 보내주기//logInAPI(action.data)펼쳐준것//call을하면 loginAPI가 리턴할떄까지 기다렸다가 리턴 , forks는 요청 보내버리고 바로 다음거 실행
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

//1.이벤트 리스너(비유)들 만들고
//비동기 액션
function* watchLogIn() {
  //LOG_IN_REQUEST액션이 실행되면 logIn을 실행
  yield take("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield take("LOG_OUT_REQUSET", logOut);
}

function* watchAddPost() {
  yield take("ADD_POST_REQUEST", addPost);
}

//all은 배열은 받는다 배열 안에 있는것을 한방에 실행 시켜줌
//fork : 함수 실행
//call(동기 함수 호출) vs forK(비동기 함수 호출)

//2.이벤트 리스너 등록
export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
