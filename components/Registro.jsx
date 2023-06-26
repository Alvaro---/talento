import FormularioRegistro from './FromularioRegistro';

const Registro = () => {
    return (
        <section className="w-screen min-h-screen blue flex flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col justify-center items-center p-8 text-lg">
                <p className="p-10 text-center">
                    +Talento es un espacio que expone las tendencias actuales,
                    teniendo como referencia la generación de una cultura organizacional,
                    orientada y fundamentada en las personas y el desarrollo de su talento.
                </p>
                <p className="p-10 text-center">
                    Además, este año te ofrecemos una Certificación en
                    HR Business Partner – Facilitador/a del Desarrollo y Aprendizaje Corporativo,
                    con la presencia de Juan Carlos Cadavid.
                </p>
            </div>
            <div className="container mx-auto p-4 bg-blue md:w-full w-full min-h-full rounded-3xl flex flex-col items-center justify-center">
                <FormularioRegistro />
            </div>
        </section>
    )
}

export default Registro
