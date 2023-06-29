import {
	Certificacion,
	Certificacion2,
	Certificacion3,
	Description,
	Footer,
	Hero,
	Herramientas,
	Participants,
	Registro,
} from "@/components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
	return (
		<main className='relative flex flex-col primaryColor'>
			<Hero />
			<Participants />
			<Description />
			<div className=''>
				<Certificacion />
			</div>
				<Certificacion2 />
				<Certificacion3 />
			<h2 className="text-blue text-center text-2xl mt-10">Conoce a nuestro equipos</h2>
			<Herramientas />
			<Registro />
			<Footer />
		</main>
	);
}
