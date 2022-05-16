import { takeEvery, put, call } from "redux-saga/effects"

//Account Redux states
import { REGISTER_USER } from "./actionTypes"
import { registerUserSuccessful, registerUserFailed } from "./actions"


import {
  postRegister
} from "../../../services/backend"



// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
  try {
      const response = yield call(postRegister, user)
      console.log(response);
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(registerUserSuccessful(JSON.parse(localStorage.getItem("authUser"))["user"]))
  } catch (error) {
    yield put(registerUserFailed(error))
  }

}
function* accountSaga() {
  yield takeEvery(REGISTER_USER, registerUser)
}

export default accountSaga
