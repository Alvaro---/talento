import Image from 'next/image'
import logoImage from '../images/logo.png'
import { Counter } from '.'

const Hero = () => {
  const targetDate = new Date('2023-12-31T00:00:00');

  return (
    <section className='w-screen h-screen darkblue flex flex-col justify-center items-center'>
      <Counter />
      <Image src={logoImage} className='w-auto h-1/3 md:h-1/2' alt='logo talento'/>
      <h3 className='text-center text-yellow text-sm md:text-lg font-bold tracking-wider p-4'>FERIA DE EXPERIENCIAS Y HERRAMIENTAS TRANSFORMADORAS</h3>
    </section>
  )
}

export default Hero