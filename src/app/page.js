import Image from 'next/image'
import Header from '../Components/Header'
import Marque from '../Components/Marque'

export default function Home() {
  return (
    <>
    <Header />
    <div className='pt-20 px-20'>
      hello
    </div>
    <div>
      <Marque />
    </div>
    </>
  )
}
