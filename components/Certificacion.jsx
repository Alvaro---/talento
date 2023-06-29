import Image from "next/image"
import logoImage from '../images/logo_azul.png'
import author from '../images/hr.png'

const Certificacion = () => {
    return (
        <section className="w-screen darkblue flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-background_yellow">
            <div className="flex md:flex-row flex-col relative">
                <Image src={logoImage} className="md:w-1/3 w-full" alt="logo talento" />
                <div className="md:p-5 md:m-5">
                    <h1 className="text-center text-blueMid text-3xl md:text-5xl font-bold tracking-wider p-1">HR BUSINESS PARTNER</h1>
                    <h3 className="text-xl font-semibold tracking-wide p-4 text-center md:text-left">Facilitacón Experimental basada en Gamificación para el desarrollo del talento corporativo</h3>
                    <div className="flex flex-row">
                        <h2 className="text-xl font-semibold tracking-wide p-4 text-center">Juan Carlos Cadavid</h2>
                        <div className="absolute bottom-0 right-0 mb-4 mr-4">
                            {/* <Image src={author} className="w-20" alt="author" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificacion
