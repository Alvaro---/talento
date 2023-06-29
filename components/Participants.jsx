import Image from 'next/image'
import talentCardsLogo from '../images/participantsLogos/talent-cards.png'
import legoLogo from '../images/participantsLogos/lego+serious+play.jpg'
import finxsLogo from '../images/participantsLogos/finxs.png'
import pointsOfYou from '../images/participantsLogos/points-of-you-fondo-blanco.png'

const participants = [
  {
    id: 1,
    image: legoLogo,
    alt: 'Lego Serious Play'
  },
  {
    id: 2,
    image: pointsOfYou,
    alt: 'Points of you'
  },
  {
    id: 3,
    image: finxsLogo,
    alt: 'FINXS EXTENDED DISC MAPA DEL TALENTO '
  },
  {
    id: 4,
    image: talentCardsLogo,
    alt: 'TalentCards'
  },
]

const Participants = () => {
  return (
    <section className="flex flex-col items-center min-h-screen w-screen mt-10">
      <h1 className="text-blue font-extrabold text-3xl">Participantes</h1>
      <div className='flex flex-col md:flex-row md:justify-center items-center w-full md:p-0 p-2 mt-2 md:mt-8'>
        <div className="flex flex-col items-start justify-center p-5 my-10 bg-yellow w-screen md:w-1/2 h-16">
          <h2 className="text-blue font-extrabold tracking-wider">1ra Edición</h2>
          <h4 className="text-blue font-bold tracking-tighter md:tracking-wider">Certificación: HR-BUSSINES PARTNER</h4>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap justify-center items-center'>
          {
            participants.map(participant => (
              <div className='w-36 p-2 mb-5 md:w-80 m-6' key={participant.id}>
                <Image src={participant.image} alt={participant.alt} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Participants
