import { useContext } from 'react'
import Image from 'next/image'
import { context } from '../../Context/userContext'
import styles from './styles'
import Logo from '../../public/Logo.png'
import { signInWithGoogle } from '../../lib/firebaseAuth'
import { auth } from '../../lib/firebaseAuth'
import { useEffect, useState } from 'react'

const LOGGED = true

const Header = () => {
  const { setUser, user } = useContext(context)

  useEffect(() => {
    if (setUser) {
      auth.onAuthStateChanged(user => {
        console.log(setUser)
        setUser(user)
        console.log(user)
      })
    }
  }, [setUser])

  return (
    <>
      <header>
        <Image src={Logo} alt='Logo Grupo CESA' width='100' height='100' />
        <nav>
          <ul>
            {
              !user &&
              <li>
                <button onClick={signInWithGoogle}>Ingresar</button>
              </li>
            }
            {
              user &&
              <li>
                <button>Ver disponibilidad</button>
              </li>
            }

          </ul>
        </nav>
      </header>
      <style jsx>{styles}</style>
    </>
  )
}
export default Header
