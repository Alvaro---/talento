import Link from 'next/link';
import FormularioRegistro from './FromularioRegistro';

const Registro = () => {
    return (
        <section className="text-white w-screen min-h-screen blue flex flex-col md:flex-row bg-cover 
        bg-center 
        bg-no-repeat
        bg-logo_background_large
        md:bg-logo_background">
            <div className="md:w-1/2 flex flex-col justify-center items-center p-8 text-lg">
                <p className="p-10 text-center">
                    +Talento es un espacio que expone las tendencias actuales,
                    teniendo como referencia la generación de una cultura organizacional,
                    orientada y fundamentada en las personas y el desarrollo de su talento.
                </p>
                <a href="/Brochure.pdf"  alt="Brouchure"  target="_blank"  rel="noopener noreferrer" className="text-center bg-yellow text-blue font-bold py-2 px-4 rounded-md w-full">
                    Descargar programa
                </a>
            </div>
            <div className="container mx-auto p-4 md:w-full w-full min-h-full rounded-3xl flex flex-col items-center justify-center">
                <FormularioRegistro />
            </div>
        </section>
    )
}

export default Registro
