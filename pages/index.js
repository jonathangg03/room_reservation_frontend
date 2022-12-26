import Header from '../Components/Header'
import Installations from '../Components/Installations'

export default function Home() {
  return (
    <div>
      <Header />
      <Installations />
      <style jsx>
        {`
          div {
            position: relative;
          }
        `}
      </style>
    </div>
  )
}
