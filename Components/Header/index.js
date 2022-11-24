import Image from 'next/image'
import styles from './styles'
import Logo from '../../public/Logo.png'
import { signInWithRedirect } from 'firebase/auth'
import auth from '../../lib/firebaseAuth'

const LOGGED = true

const handleSignIn = () => {
  signInWithRedirect(auth)
}

const Header = () => (
  <>
    <header>
      <Image src={Logo} alt='Logo Grupo CESA' width='100' height='100' />
      <nav>
        <ul>
          <li>
            <button onClick={handleSignIn}>Ingresar</button>
          </li>
          <li>
            <button>Ver disponibilidad</button>
          </li>
        </ul>
      </nav>
    </header>
    <style jsx>{styles}</style>
  </>
)

export default Header
