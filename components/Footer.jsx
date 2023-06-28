import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 bg-yellow text-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div>
            <h3 className="text-md font-bold mb-2 text-blue">La Paz</h3>
            <ul>
              <li className="text-blue">20 y 21 de julio, 17:00 a 21:00 Hrs</li>
              <li className="text-blue">22 de julio, 9:00 a 13:00 Hrs</li>
            </ul>
            <h3 className="text-md font-bold mb-2 text-blue">Santa Cruz</h3>
            <ul>
              <li className="text-blue">26 y 27 de julio, 17:00 a 21:00 Hrs</li>
              <li className="text-blue">28 de julio, 9:00 a 13:00 Hrs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2 text-blue">Teléfonos de contacto</h3>
            <ul>
              <li className="text-blue">123-456-7890</li>
              <li className="text-blue">987-654-3210</li>
            </ul>
          </div>

          <div className="flex items-center justify-center m-0 p-0 text-blue">
            <a href="#" className="p-5" >
              <FontAwesomeIcon icon={faFacebook} size="3x"/>
            </a>
            <a href="#" className="p-5">
              <FontAwesomeIcon icon={faInstagram} size="3x"/>
            </a>
            <a href="#" className="p-5">
              <FontAwesomeIcon icon={faTwitter} size="3x"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
