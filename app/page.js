import {
	Author,
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
			<div className='bg-yellow my-10 py-10 p-2 flex flex-col justify-center items-center'>
				<h1 className='text-center text-blueMid text-3xl md:text-5xl font-bold tracking-wider p-1'>
					CERTIFICACIÓN HR BUSINESS PARTNER
				</h1>
				<h3 className='text-xl font-semibold tracking-wide text-center md:text-left'>
					Facilitación Experiencial basada en Gamificación para el Desarrollo del Talento
					Corporativo
				</h3>
			</div>
			{/* <div
				className=' bg-cover 
						bg-center 
						bg-no-repeat
						bg-logo_background_large'
				> */}
			<div>
				<Author />
				<Certificacion2 />
				<Certificacion3 />
			</div>
			<div className='bg-yellow my-10 p-2 flex flex-col justify-center items-center'>
				<h2 className='text-blue text-center text-2xl m-10 font-bold'>
					Conoce sobre nuestros expositores
				</h2>
			</div>
			<Herramientas />
			<div className='bg-yellow my-10 p-2 flex flex-col justify-center items-center'>
				<h2 className='text-blue text-center text-2xl m-10 font-bold'>Registrate</h2>
			</div>
			<Registro />
			<Footer />
		</main>
	);
}
