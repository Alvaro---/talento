import Image from 'next/image'
import Expositor from "../images/hr1.png"
import Bandera from "../images/bandera.jpg"


const Author = () => {
    return (
        <div className='flex md:flex-row flex-col justify-center items-center m-auto md:w-1/2 border-solid py-10 border-4'>
            <div className='w-full'>
                <Image
                    src={Expositor}
                    className="max-h-full max-w-full" />
            </div>
            <div className='mx-5'>
                <h2 className='flex justify-around font-bold p-10'>
                    Expositor: Juan Carlos Cadavid
                    <Image src={Bandera}
                        className='w-10' />
                </h2>
                <p className='text-lg'>Facilitador experiencial, coach y consultor en experiencias de
                    desarrollo organizacional y gestión de la
                    innovación empresarial en E&D Entrenamiento &
                    Desarrollo facilitadores latinoamericanos.
                </p>
            </div>
        </div>
    )
}

export default Author
