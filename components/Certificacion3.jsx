import certificacionImages from "@/data/certificacionImages"
import Image from "next/image"

const Certificacion3 = () => {
    return (
        <div className="w-5/6 m-auto flex flex-wrap">

            {certificacionImages.map((image) => (
                <Image src={image.image} key={image.id} className="md:w-1/2 " />
            ))}
        </div>
    )
}

export default Certificacion3
