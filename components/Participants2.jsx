import Image from "next/image";
import participants from "@/data/participants"

const Participants = () => {
  return (
    <section className="flex flex-col items-center min-h-screen w-screen mt-10">
      <h1 className="text-blue font-extrabold text-3xl">Participantes</h1>
      <div className='flex flex-col md:flex-row md:justify-center items-center w-full md:p-0 p-2 mt-2 md:mt-8'>
        <div className='flex flex-col md:flex-row flex-wrap justify-center items-center'>
          {
            participants.map(participant => (
              <div className='w-40 p-2 mb-5 md:w-72 m-6' key={participant.id}>
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
