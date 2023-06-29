import Image from "next/image";
import participants from "@/data/participants"
import Link from "next/link";

const Participants = () => {
  return (
    <section className="flex flex-col items-center h-full w-full my-16">
      <h1 className="text-blue font-extrabold text-3xl">Participantes</h1>
      <div className='flex flex-col md:flex-row md:justify-center items-center w-full md:p-0 p-2 mt-2 md:mt-8'>
        <div className='flex flex-col md:flex-row flex-wrap justify-center items-center'>
          {
            participants.map(participant => (
              <div className='w-50 p-2 mb-5 md:w-72 m-6' key={participant.id}>
                <Link href={participant.link}>
                  <Image src={participant.image} alt={participant.alt} />
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Participants
