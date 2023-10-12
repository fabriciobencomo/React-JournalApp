import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword, signInGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"
import { checkingCredential, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
  return async( dispatch ) => {
    dispatch( checkingCredential() )
  } 
}

export const startGoogleSignIn = (email, password) => {
  return async( dispatch ) => {
    dispatch( checkingCredential() )
    const result = await signInGoogle()
    if(!result.ok){
      dispatch( logout(result.errorMsg) )
    }else{
      dispatch( login(result) )
    }
  } 
}

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
  return async( dispatch) => {
    dispatch( checkingCredential() )
    const result = await registerUserWithEmailAndPassword({email, password, displayName})
    if(!result.ok){
      dispatch( logout(result.errorMsg) )
    }else{
      dispatch( login(result) )
    }
  }
}

export const startLoginWithEmailAndPassword = ({email, password}) => {
  return async(dispatch) => {
    dispatch (checkingCredential())
    const result = await loginWithEmailAndPassword({email, password})
    if(!result.ok){
      dispatch( logout(result.errorMsg) )
    }else{
      dispatch( login(result) )
    }
  }
}

export const startLogout = () => {
  return async(dispatch) => {
    await logoutFirebase()
    dispatch(clearNotesLogout())
    dispatch (logout())
  }
}