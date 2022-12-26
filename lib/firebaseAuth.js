import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import { getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { firebase } from '../config'
import 'firebase/auth'

const firebaseConfig = { ...firebase }

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
provider.setCustomParameters({ prompt: 'select_account' })

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    alert('No se pudo iniciar sesión')
  }
}

const logOut = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}

export { auth, signInWithGoogle, logOut }
