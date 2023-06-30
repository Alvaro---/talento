import ImageSlider from "./ImageSlider "
import openCards from "@/data/openCards"
import talentCards from "@/data/talentCards"
import finx from "@/data/finx"
import pointOfYou from "@/data/poitOfYou"
import participants from "@/data/participants"
import Image from "next/image"

const Herramientas = () => {
    return (
        <div className="flex justify-center items-center flex-col  bg-cover 
        bg-center 
        bg-no-repeat
        bg-logo_background">
            <section id="pointsOfYou" className='flex flex-col md:flex-row p-0 md:p-5 md:m-5 mt-2 justify-between md:border-solid md:border-2 md:border-[#07349A] w-full md:w-5/6 bg-white'>
                <div className='textBox w-full md:w-1/2 flex-col justify-center items-center'>
                    {/* <h3 className='text-blue mb-5'>Points of You</h3> */}
                    <Image src={participants[0].image} alt={participants[0].alt} className="w-7/12 mb-5" />
                    <p>
                        Points of You® es la metodología que está revolucionando el mundo de la empresa, del coaching y del desarrollo personal y profesional, para potenciar la creatividad y la productividad tanto de personas como de equipos.
                        Nuestras herramientas innovadoras y creativas utilizan el poderoso lenguaje de la fotografía para crear una comunicación significativa abriendo nuevas posibilidades para el cambio y el crecimiento.
                    </p>
                </div>
                <div className="textBox w-full md:w-1/2 flex justify-center items-center max-h-full md:h-[350px] h-[250px]">
                    <ImageSlider images={pointOfYou} className="md:h-[400px] h-[250px]" />
                </div>
            </section>

            <section  id="talentCards" className='flex flex-col md:flex-row-reverse p-0 md:p-5 md:m-5 mt-2 justify-between md:border-solid md:border-2 md:border-[#D6703A] w-full md:w-5/6 bg-white'>
                <div className='textBox w-full md:w-1/2 flex-col justify-center items-center'>
                    {/* <h3 className='text-blue mb-5'>Talent Cards®</h3> */}
                    <Image src={participants[1].image} alt={participants[1].alt} className="w-7/12 mb-5" />
                    <p>
                        Talent Cards® son un conjunto de
                        cartas que permiten visualizar y
                        sintonizar con los talentos y competencias que posees.
                        Las cartas son una herramienta creativa e inspiradora
                        para el coaching y desarrollo personal y organizacional.
                        Con las cartas puedes desarrollar modelos o perfiles de éxito que
                        te permitirán contar con una orientación clara y enfocada hacia tu
                        desarrollo, el desarrollo de tu equipo o de tu organización.
                        Las cartas cuentan con criterios coherentes y claros, que te permiten
                        la integración y alineación de los procesos de gestión del talento con los objetivos de negocio o de una organización.</p>
                </div>
                <div className="textBox w-full md:w-1/2 flex justify-center items-center max-h-full md:h-[350px] h-[250px]">
                    <ImageSlider images={talentCards} className="md:h-[400px] h-[250px]" />
                </div>
            </section>

            <section id="openCards" className='flex flex-col md:flex-row p-0 md:p-5 md:m-5 mt-2 justify-between md:border-solid md:border-2 md:border-[#64BC53] w-full md:w-5/6 bg-white'>
                <div className='textBox w-full md:w-1/2 flex-col justify-center items-center'>
                    {/* <h3 className='text-blue mb-5'>Open Cards</h3> */}
                    <Image src={participants[2].image} alt={participants[2].alt} className="w-7/12 mb-5" />
                    <p>La metodología Open Cards® es una plataforma que permite crear espacios participativos y responder asuntos clave de cualquier negocio, cliente o equipo.
                        Cuenta con Kits de trabajo y conversaciones, con más de 100 modelos de aplicación. Se basa en un modelo de conversaciones que te guiará para manejarlo en contextos diversos, en grupo, individualmente, facilitando espacios seguros y participativos.
                        La aplicabilidad de este modelo se adecúa a entornos diversos, creando un espacio de diálogo abierto, participativo y constructivo.</p>
                </div>
                <div className="textBox w-full md:w-1/2 flex justify-center items-center max-h-full md:h-[350px] h-[250px]">
                    <ImageSlider images={openCards} className="md:h-[400px] h-[250px]" />
                </div>
            </section>

            <section id="finxs" className='flex flex-col md:flex-row p-0 md:p-5 md:m-5 mt-2 justify-between md:border-solid md:border-2 md:border-[#CD1F26] w-full md:w-5/6 bg-white'>
                <div className='textBox w-full md:w-1/2 flex-col justify-center items-center'>
                    {/* <h3 className='text-blue mb-5'>Extended DISC® by Finxs</h3> */}
                    <Image src={participants[3].image} alt={participants[3].alt} className="w-7/12 mb-5" />
                    <p>
                        Herramienta de evaluación que brinda información profunda sobre el comportamiento natural de las personas y permite maximizar el desempeño de las personas, los equipos y la organización.  Extended DISC®  brinda información práctica y  tiene una base sólida para desarrollar capacidades.
                        Finxs es una plataforma versátil de administración de evaluaciones que apoyan la gestión del talento humano.
                    </p>
                </div>
                <div className="textBox w-full md:w-1/2 flex justify-center items-center max-h-full md:h-[350px] h-[250px]">
                    <ImageSlider images={finx} className="md:h-[400px] h-[250px]" />
                </div>
            </section>
        </div>
    )
}

export default Herramientas
