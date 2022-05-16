import { takeEvery, put, call, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes"
import { loginSuccess,  apiError } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postLogin,
  postSocialLogin,
  postLogout
} from "../../../services/backend"


function* loginUser({ payload: { user, history } }) {
  console.log(user);

  try {
      const response = yield call(postLogin, user)
      console.log(response);
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(JSON.parse(localStorage.getItem("authUser"))["user"]))
  } catch (error) {
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { user, history } }) {
  try {
    const response = yield call(postLogout, user)
    localStorage.removeItem("authUser")
    history.push("/")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend()
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type
      )
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else {
      const response = yield call(postSocialLogin, data)
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}


function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeLatest(SOCIAL_LOGIN, socialLogin)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
