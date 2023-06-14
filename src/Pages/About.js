import React from "react";
import Avatar1 from "../assets/img/Avatar1.jpg";
import Avatar2 from "../assets/img/Avatar2.jpg";
import Avatar3 from "../assets/img/Avatar3.jpg";
import TF1Logo from "../assets/img/tf1.png";
import M6Logo from "../assets/img/m6.jpg";
import Direct8Logo from "../assets/img/c8.png";
import video from "../assets/video/Nova.mp4";

const About = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      avatar: Avatar1,
      comment:
        "Super agence pour travailler avec ! Ils m'ont aidé à trouver la maison parfaite.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: Avatar2,
      comment:
        "Je recommande vivement cette agence. Le personnel était professionnel et attentionné.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: Avatar3,
      comment:
        "Excellent service et agents compétents. Ils ont rendu le processus d'achat facile.",
      rating: 4,
    },
  ];

  const videoStyle = {
    width: "100%",
    maxWidth: "200px",
    margin: "0 auto", // Center the video horizontally
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">À propos de nous</h1>
      <p className="mb-4 text-center">
        Bienvenue dans notre agence immobilière ! Nous sommes dédiés à aider les
        particuliers et les familles à trouver leur maison ou leur propriété de
        rêve. Avec des années d'expérience dans le secteur, nous offrons des
        services de qualité et une assistance personnalisée pour garantir un
        parcours immobilier fluide et réussi pour nos clients.
      </p>
      <div className="mb-2">
        <video src={video} autoPlay loop muted style={videoStyle}>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <h2 className="text-2xl font-bold mb-2 ">Pourquoi nous choisir ?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Agents expérimentés et compétents</li>
        <li>Large sélection de propriétés</li>
        <li>Assistance personnalisée</li>
        <li>Attention aux détails</li>
        <li>Service clientèle excellent</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2 text-center">Témoignages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-4 rounded shadow">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt=""
                className="w-10 h-10 rounded-full mr-2"
              />
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
            </div>
            <p className="text-gray-600 mb-2">{testimonial.comment}</p>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      testimonial.rating >= index + 1
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.218 7.13l-6.139-.892L10.46.335a.833.833 0 00-1.48 0l-2.62 5.902-6.14.892a.833.833 0 00-.458 1.42l4.47 4.365-1.056 6.165a.833.833 0 001.207.877l5.52-2.9 5.52 2.9a.833.833 0 001.207-.877l-1.057-6.165 4.47-4.365a.833.833 0 00-.458-1.42zM10 12.588V17.5a.833.833 0 001.389.63l4.377-3.71 5.363.782a.833.833 0 00.46-1.42l-4.129-4.037 1.03-6.014a.833.833 0 00-1.206-.877L10 4.425V.833a.833.833 0 00-1.667 0v3.592L2.306 4.37a.833.833 0 00-1.206.876l1.03 6.015L.127 13.402a.833.833 0 00.46 1.42l5.362-.782L8.61 18.13a.833.833 0 001.39-.63V12.59z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                {testimonial.rating.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <img src={TF1Logo} alt="TF1" className="h-8 mx-2" />
        <img src={M6Logo} alt="M6" className="h-8 mx-2" />
        <img src={Direct8Logo} alt="Direct 8" className="h-8 mx-2" />
      </div>
      <p className="text-center text-gray-500 mt-2">
        Il se peut que vous ayez déjà entendu parler de notre agence sur ces
        chaînes de renom telles que TF1, M6 et Direct 8.
      </p>
    </div>
  );
};

export default About;
