import Image from 'next/image'
import Expositor from "../images/author.png"
import Bandera from "../images/bandera.jpg"


const Author = () => {
    return (
        // <div className='flex md:flex-row-reverse flex-col justify-center items-center m-auto md:w-1/2 border-solid md:p-0 py-10 border-4 border-blue bg-logo_background text-white'>
        <div className='flex mb-10 md:flex-row-reverse flex-col justify-center items-center m-auto md:w-1/2 border-solid md:p-0 py-10 border-4 border-blue bg-white'>
            <div className='w-full'>
                <Image
                    src={Expositor}
                    className="max-h-full max-w-full" />
            </div>
            <div className='mx-5 py-0 max-w-sm'>
                <h2 className=' text-2xl md:text-4xl text-start font-bold mt-5 md:mt-0'>
                    Juan Carlos
                </h2>
                <span className='text-2xl md:text-4xl font-bold'> Cadavid</span>
                <Image src={Bandera}
                    className='w-10 my-5' />
                <p className='text-lg mt-5'>Facilitador experiencial, coach y consultor en experiencias de
                    desarrollo organizacional y gestión de la
                    innovación empresarial en E&D Entrenamiento &
                    Desarrollo facilitadores latinoamericanos.
                </p>
            </div>
        </div>
    )
}

export default Author
