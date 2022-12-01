import '../styles/globals.css'
import { contextProvider } from '../Context/userContext'

function MyApp({ Component, pageProps }) {
  return <contextProvider><Component {...pageProps} /></contextProvider>
}

export default MyApp
