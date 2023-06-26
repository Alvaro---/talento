import Image from 'next/image';
import bannerImage from '../images/banner1.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 bg-yellow text-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div>
            <h3 className="text-lg font-bold mb-2 text-blue">Fechas de presentación</h3>
            <ul>
              <li className="text-blue">Fecha 1: 10 de julio de 2023</li>
              <li className="text-blue">Fecha 2: 15 de julio de 2023</li>
              <li className="text-blue">Fecha 3: 20 de julio de 2023</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2 text-blue">Teléfonos de contacto</h3>
            <ul>
              <li className="text-blue">Teléfono 1: 123-456-7890</li>
              <li className="text-blue">Teléfono 2: 987-654-3210</li>
            </ul>
          </div>

          <div className="flex items-center justify-center m-0 p-0">
            <Image
              src={bannerImage}
              alt="Logotipo"
              className="h-full w-full m-0 p-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
