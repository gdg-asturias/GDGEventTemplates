import firebase from 'firebase/app'
import 'firebase/auth'
import { SET_USER } from '../store/mutation-types'

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  })
}

const signInWithEmailLink = async () => {
  if (firebase.auth().isSignInWithEmailLink(location.href)) {
    const email = localStorage.getItem('emailForSignIn')
    if (email) {
      await firebase.auth().signInWithEmailLink(email, location.href)
      localStorage.removeItem('emailForSignIn')
    }
  }
}

export default async ({ store }) => {
  await signInWithEmailLink()

  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.commit(`account/${SET_USER}`, user)
      }
      resolve()
    })
  })
}
