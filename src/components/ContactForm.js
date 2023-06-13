import React, { useState } from "react";
import axios from "axios";
import Contact from "../assets/video/Contact.mp4";

const ContactForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [agence, setAgence] = useState("");
  const [client, setClient] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      nom,
      prenom,
      email,
      telephone,
      message,
      agence,
      client,
      newsletter,
    };

    axios
      .post(
        "https://getform.io/f/33d01226-e8a6-40b2-9efc-c89448fe46e2",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log(response);
        // Réinitialiser les champs
        setNom("");
        setPrenom("");
        setEmail("");
        setTelephone("");
        setMessage("");
        setAgence("");
        setClient(false);
        setNewsletter(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="nom"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Nom :
          </label>
          <input
            type="text"
            id="nom"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="prenom"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Prénom :
          </label>
          <input
            type="text"
            id="prenom"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="telephone"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Téléphone :
          </label>
          <input
            type="tel"
            id="telephone"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Message :
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="agence"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Sélectionnez votre agence :
          </label>
          <select
            id="agence"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={agence}
            onChange={(e) => setAgence(e.target.value)}
          >
            <option value="">-- Sélectionnez une agence --</option>
            <option value="agence1">Agence de Nice</option>
            <option value="agence2">Agence d'Alsace</option>
            <option value="agence3">Agence de Paris</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="client"
            className="flex items-center mb-2 text-sm font-medium text-gray-700"
          >
            <input
              type="checkbox"
              id="client"
              className="mr-2"
              checked={client}
              onChange={(e) => setClient(e.target.checked)}
            />
            Je suis client Nova Luxe
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="newsletter"
            className="flex items-center mb-2 text-sm font-medium text-gray-700"
          >
            <input
              type="checkbox"
              id="newsletter"
              className="mr-2"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
            M'inscrire à la newsletter
          </label>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Envoyer
        </button>
      </form>
      <div className="w-full max-w-md mr-8">
        {/* Apply marginLeft to create some margin on the right */}
        <video src={Contact} autoPlay loop muted className="w-full h-auto">
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  );
};

export default ContactForm;
