import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">NovaLuxe</h3>
            <p className="text-gray-300 text-sm">
              Trouvez votre maison de rêve avec NovaLuxe, experts en immobilier
              dédiés à vous offrir un service personnalisé et de qualité.
            </p>
          </div>
          <div className="mb-4 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="text-gray-300 text-sm">
              <li className="mb-2">
                <a href="/" className="hover:text-blue-500">
                  Accueil
                </a>
              </li>
              <li className="mb-2">
                <a href="/properties" className="hover:text-blue-500">
                  Propriétés
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-blue-500">
                  À propos
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Nous contacter</h3>
            <p className="text-gray-300 text-sm">
              Adresse : 123 Rue Principale, Paris, France
              <br />
              Téléphone : +123 456 789
              <br />
              Email : info@novaluximmobiliere.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-300 text-sm">
            © 2023 NovaLuxe Immobilière. Tous droits réservés. Réalisé par
            Faouzi / Zitouni / Olivier.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
