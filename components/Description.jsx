
const Description = () => {
    return (
        <section className="flex flex-col justify-around blue w-screen h-screen md:p-40 p-5 md:text-2xl text-xl">
            <h1 className="text-center mb-10">Prepárate para vivir experiencias, reflexiones y aprendizajes.</h1>
            <h2 className="italic text-center mb-10">
                &quot;Inspirados en el momento actual,
                +Talento es una propuesta para vivir e intercambiar enfoques
                y herramientas creativas y modernas que te permitirán potenciar
                tus posibilidades de acompañar los procesos de desarrollo y crecimiento
                organizacional.&quot;
            </h2>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Días y Horarios</h2>
                <div className="flex justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-semibold">La Paz</h3>
                        <p>20 y 21 de julio, 17:00 a 21:00 Hrs</p>
                        <p>22 de julio, 9:00 a 13:00 Hrs</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Santa Cruz</h3>
                        <p>26 y 27 de julio, 17:00 a 21:00 Hrs</p>
                        <p>28 de julio, 9:00 a 13:00 Hrs</p>
                    </div>
                </div>
                <p className="text-lg">Bs 100 adhesión para los 3 días.</p>
            </div>
        </section>
    )
}

export default Description
