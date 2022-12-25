import Image from 'next/image'
import styles from './styles'
import Logo from '../../public/Logo.png'
import { signInWithGoogle } from '../../lib/firebaseAuth'
import { auth } from '../../lib/firebaseAuth'
import { useEffect, useState } from 'react'

const LOGGED = true

const Header = () => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserData(user)
      console.log(user)
    })
  }, [])

  return (
    <>
      <header>
        <Image src={Logo} alt='Logo Grupo CESA' width='100' height='100' />
        <nav>
          <ul>
            <li>
              <button onClick={signInWithGoogle}>Ingresar</button>
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
}

export default Header
