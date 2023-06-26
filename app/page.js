import { Description, Footer, Hero, Participants, Registro } from "@/components";

export default function Home() {
	return (
		<main className='relative flex flex-col primaryColor'>
			<Hero />
			<Description />
			<Participants />
			<Registro />
			<Footer />
		</main>
	);
}
