import ImageSlider from "./ImageSlider "
import certificacion from "@/data/certificacion"

const Certificacion = () => {
    return (
        <div className='flex-col p-5 mb-1 justify-between text-blue font-bold text-center'>
            <p className="p-5 text-center md:mx-10">
                Además, este año te ofrecemos una Certificación en
                HR Business Partner – Facilitador/a del Desarrollo y Aprendizaje Corporativo,
                con la presencia de Juan Carlos Cadavid.
            </p>
            <div className='flex flex-col md:flex-row p-1 md:p-5 md:m-5 mt-2 justify-between'>
                <div className='textBox w-full md:w-1/2'>
                    <h3 className='text-blue mb-5'>Open Cards</h3>
                    <p>La metodología Open Cards® es una plataforma que permite crear espacios participativos y responder asuntos clave de cualquier negocio, cliente o equipo.
                        Cuenta con Kits de trabajo y conversaciones, con más de 100 modelos de aplicación. Se basa en un modelo de conversaciones que te guiará para manejarlo en contextos diversos, en grupo, individualmente, facilitando espacios seguros y participativos.
                        La aplicabilidad de este modelo se adecúa a entornos diversos, creando un espacio de diálogo abierto, participativo y constructivo.</p>
                </div>
                <div className="textBox w-full md:w-1/2 flex justify-center items-center h-full">
                    <ImageSlider images={certificacion} />
                </div>
                {/* <div className='textBox'>
                    <h3 className='text-blue mb-5'>Karina Tapia</h3>
                    <p>Consultora y experta en desarrollo organizacional, pionera de la metodología Open Cards® para Bolivia. Administradora de empresas, especialista en gestión y desarrollo del talento humano y Magíster en administración de negocios.
                        Ha trabajado durante más de 10 años en el sector financiero en el área de Talento Humano.
                        Actualmente se desenvuelve como consultora y facilitadora con Openmind Consulting & Design, para temas de liderazgo, diseño e innovación, y cultura de co creación con experiencia a nivel Latinoamérica</p>
                </div> */}
            </div>

        </div>
    )
}

export default Certificacion
