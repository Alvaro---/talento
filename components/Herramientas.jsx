import ImageSlider from "./ImageSlider "
import openCards from "@/data/openCards"
import talentCards from "@/data/talentCards"
import finx from "@/data/finx"
import pointOfYou from "@/data/openCards"

const Herramientas = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <section className='flex flex-col md:flex-row p-0 md:p-5 md:m-5 mt-2 justify-between md:border-solid md:border-2 w-full md:w-5/6'>
                <div className='textBox w-full md:w-1/2' id="openCards">
                    <h3 className='text-blue mb-5'>Open Cards</h3>
                    <p>La metodología Open Cards® es una plataforma que permite crear espacios participativos y responder asuntos clave de cualquier negocio, cliente o equipo.
                        Cuenta con Kits de trabajo y conversaciones, con más de 100 modelos de aplicación. Se basa en un modelo de conversaciones que te guiará para manejarlo en contextos diversos, en grupo, individualmente, facilitando espacios seguros y participativos.
                        La aplicabilidad de este modelo se adecúa a entornos diversos, creando un espacio de diálogo abierto, participativo y constructivo.</p>
                </div>
                <div className="textBox w-full md:w-1/2 flex justify-center items-center max-h-full md:h-[350px] h-[250px]">
                    <ImageSlider images={openCards} className="md:h-[400px] h-[250px]" />
                </div>
            </section>

            <section className='flex flex-col md:flex-row-reverse p-0 md:p-5 md:m-5 mt-2 justify-between md:border-solid md:border-2 w-full md:w-5/6'>
                <div className='textBox w-full md:w-1/2' id="talentCards">
                    <h3 className='text-blue mb-5'>Talent Cards®</h3>
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

            <section className='flex flex-col md:flex-row p-0 md:p-5 md:m-5 mt-2 justify-between md:border-solid md:border-2 w-full md:w-5/6'>
                <div className='textBox w-full md:w-1/2' id="finxs">
                    <h3 className='text-blue mb-5'>Extended DISC® by Finxs</h3>
                    <p>
                        Herramienta de evaluación que brinda información profunda sobre el comportamiento natural de las personas y permite maximizar el desempeño de las personas, los equipos y la organización.  Extended DISC®  brinda información práctica y  tiene una base sólida para desarrollar capacidades.
                        Finxs es una plataforma versátil de administración de evaluaciones que apoyan la gestión del talento humano.
                    </p>
                </div>
                <div className="textBox w-full md:w-1/2 flex justify-center items-center max-h-full md:h-[350px] h-[250px]">
                    <ImageSlider images={finx} className="md:h-[400px] h-[250px]" />
                </div>
            </section>

            <section className='flex flex-col md:flex-row-reverse p-0 md:p-5 md:m-5 mt-2 justify-between md:border-solid md:border-2 w-full md:w-5/6'>
                <div className='textBox w-full md:w-1/2' id="finxs">
                    <h3 className='text-blue mb-5'>Points of You</h3>
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
