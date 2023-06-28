import { Certificacion, Description, Footer, Hero, Participants, Registro } from "@/components";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Home() {
	return (
		<main className='relative flex flex-col primaryColor'>
			<Hero />
			<Participants />
			<Description />
			<Certificacion />
			<Registro />
			<Footer />
		</main>
	);
}
