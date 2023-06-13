import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.png";

const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "100px", height: "100px" }}
                className="mr-2"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Accueil
            </Link>
            <Link
              to="/properties"
              className="text-white hover:bg-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Propriétés
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center ml-auto space-x-4">
            <Link to="/annonce">
              <button
                className="text-white px-4 py-2 mr-2 rounded-md hover:bg-blue-700 text-sm font-medium"
                style={{ backgroundColor: "#ae9371" }}
              >
                Crée une annonce
              </button>
            </Link>
            <button className="text-white px-4 py-2 mr-2 rounded-md bg-gray-600 hover:bg-gray-400 text-sm font-medium">
              Se connecter
            </button>
            <button className="text-white px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-400 text-sm font-medium">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
