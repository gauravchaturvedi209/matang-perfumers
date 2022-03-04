import { all, call, takeLatest, put } from "redux-saga/effects";
import { signOutSuccess } from "../user/user.actions";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut(){
  console.log("trying");
  yield put(clearCart());
}

export function* onSignOutSuccess(){
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas(){
  yield(all([
    call(onSignOutSuccess)
  ]))
}