import '../styles/globals.css'
import { ContextProvider } from '../Context/userContext'

function MyApp({ Component, pageProps }) {
  return <ContextProvider><Component {...pageProps} /></ContextProvider>
}

export default MyApp
