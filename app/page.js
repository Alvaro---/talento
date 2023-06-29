import {
	Certificacion,
	Certificacion2,
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
			<div className='bg-cover bg-center bg-no-repeat bg-background_yellow'>
				<Certificacion />
				<Certificacion2 />
			</div>
			<Herramientas />
			<Registro />
			<Footer />
		</main>
	);
}
