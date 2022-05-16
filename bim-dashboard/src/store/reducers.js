import { combineReducers } from "redux"


// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//E-commerce
import ecommerce from "./e-commerce/reducer"

//crypto
import crypto from "./crypto/reducer"

//contacts
import contacts from "./contacts/reducer"



const rootReducer = combineReducers({
  // public
  Login,
  Account,
  ForgetPassword,
  Profile,
  ecommerce,
  crypto,
  contacts,
})

export default rootReducer
