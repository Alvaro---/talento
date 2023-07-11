import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

import dio from '../images/Auspicio y organizacion/18.png'
import latina from '../images/Auspicio y organizacion/19.png'
import asbo from '../images/Auspicio y organizacion/asbo.jpg'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 bg-yellow text-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div>
            <h3 className="text-md font-bold mb-2 text-blue">La Paz</h3>
            <ul>
              <li className="text-blue">
                <p>
                  21 y 22 de Julio Hrs 17:00 a 20:30
                </p>
                <p>
                  Certificación: 9:00 a 17:00
                </p>
              </li>
            </ul>
            <h3 className="text-md font-bold mb-2 text-blue">Santa Cruz</h3>
            <ul>
              <li className="text-blue">
                <p>
                  26 y 27 de Julio Hrs 17:00 a 20:30
                </p>
                <p>
                  Certificación: 9:00 a 17:00
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2 text-blue">Teléfonos de contacto</h3>
            <ul>
              <li className="text-blue">78562700</li>
              <li className="text-blue">69850858</li>
            </ul>
          </div>

          <div className="flex items-center justify-center m-0 p-0 text-blue">
            {/* <a href="#" className="p-5" >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="#" className="p-5">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a> */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-2 text-blue">Organizadores</h3>
              <div className="flex flex-wrap">
                <Image src={latina} className="w-3/4" />
                <Image src={dio} className="w-3/4" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue">Auspiciadores</h3>
              <div className="flex flex-wrap">
                <Image src={asbo} className="w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
