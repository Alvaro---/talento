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
              <li className="text-blue">21 y 22 de Julio Hrs 17:00 a 20:30</li>
            </ul>
            <h3 className="text-md font-bold mb-2 text-blue">Santa Cruz</h3>
            <ul>
              <li className="text-blue">26 y 27 de Julio Hrs 17:00 a 20:30</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2 text-blue">Teléfonos de contacto</h3>
            <ul>
              <li className="text-blue">Eliana Otondo – 78562700</li>
              <li className="text-blue">Ana Zamorano - 69850858</li>
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
