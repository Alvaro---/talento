import Image from "next/image"
import logoImage from '../images/logo_azul.png'
import author from '../images/hr1.png'

const Certificacion = () => {
    return (
        <section className="w-screen flex flex-col justify-center items-center mb-20">
            <div className="flex md:flex-row flex-col relative">
                <Image src={logoImage} className="md:w-1/3 w-full" alt="logo talento" />
                <div className="md:pt-10 md:m-5">
                    <h1 className="text-center text-blueMid text-3xl md:text-5xl font-bold tracking-wider p-1">HR BUSINESS PARTNER</h1>
                    <h3 className="text-xl font-semibold tracking-wide p-4 md:mr-44 mt-10 text-center md:text-left">Facilitacón Experimental basada en Gamificación para el desarrollo del talento corporativo</h3>
                    <div className="flex flex-row justify-center">
                        <h2 className="text-xl font-semibold tracking-wide p-4 text-center">Juan Carlos Cadavid</h2>
                    </div>
                </div>
                {/* <div className="absolute bottom-0 right-0 border-solid w-1/5 hidden md:block">
                    <Image src={author} className="w-full" alt="author" />
                </div> */}
            </div>
        </section>
    )
}

export default Certificacion
