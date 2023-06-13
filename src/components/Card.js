import React, { useState, useEffect } from "react";
import axios from "axios";
import Maison from "../assets/img/test.jpg";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/logements")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((logement) => (
        <div key={logement.id} className="bg-white p-4 rounded shadow m-4 flex">
          <img src={Maison} alt="" className="w-1/3 mr-4" />
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-2">{logement.price}€</h1>
            <p className="text-gray-600">{logement.category}</p>
            <p className="text-gray-600">{logement.rooms} Piéces</p>
            <p className="text-gray-600">{logement.surface}m²</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
