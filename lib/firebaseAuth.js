import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import { getAuth, signInWithPopup, signOut } from 'firebase/auth'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCd9HScR9MrTdQv3Esv_RtyZReYYhfTsqc',
  authDomain: 'room-reservation-36005.firebaseapp.com',
  projectId: 'room-reservation-36005',
  storageBucket: 'room-reservation-36005.appspot.com',
  messagingSenderId: '487868769799',
  appId: '1:487868769799:web:43675b54b98691ca116ca2'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

// signInWithPopup()
//   .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result)
//     const token = credential.accessToken
//     const user = result.user
//   })
//   .catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message
//     // const email = error.customData.email;
//     const credential = GoogleAuthProvider.credentialFromError(error)
//   })

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
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

