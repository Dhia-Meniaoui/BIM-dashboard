import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SET_CURRENT_USER
} from "./actionTypes"

const initialState = {
  user: null,
  error: "",
  loading: false,
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action.payload);
      state = {
        ...state,
        user : action.payload,
        loading: true,
      }
      break
    case SET_CURRENT_USER:
      state = {
        ...state,
        user : action.payload,
        loading: true,
      }
      break
    case LOGIN_SUCCESS:
      state = {
        ...state,
        user :action.payload,
        loading: false,
      }
      break
    case LOGOUT_USER:
      state = { ...state }
      break
    case LOGOUT_USER_SUCCESS:
      state = { ...state }
      break
    case API_ERROR:
      state = { ...state, error: action.payload, loading: false }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default login
