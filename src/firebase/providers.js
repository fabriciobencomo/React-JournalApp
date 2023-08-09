import { EmailAuthCredential, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const signInGoogle = async() => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const { displayName, email, photoURL, uid} = result.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  } catch (error) {
    const errorMsg = error.message
    return {
      ok: false,
      errorMsg
    }
  }
}

export const registerUserWithEmailAndPassword = async({email, password, displayName}) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL } = resp.user
    updateProfile(FirebaseAuth.currentUser, {displayName})
    return {
      ok: true,
      email,
      password,
      displayName,
      uid,
      photoURL
    }
  } 
  catch (error) {
    const errorMsg = error.message
    return {
      ok: false,
      errorMsg
    }
  }
} 

export const loginWithEmailAndPassword = async({email, password}) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL, displayName } = resp.user
    return {
      ok: true,
      email,
      password,
      displayName,
      uid,
      photoURL
    }
  } 
  catch (error) {
    const errorMsg = error.message
    return {
      ok: false,
      errorMsg
    }
  }
}

export const logoutFirebase = async() => {
  return await FirebaseAuth.signOut()
}