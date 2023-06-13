import React, { useState } from "react";
import axios from "axios";

const Annonce = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPice] = useState(0);
  const [category, setCategory] = useState("");
  const [rooms, setRooms] = useState(0);
  const [surface, setSurface] = useState(0);

  const postAnnonce = () => {
    axios
      .post("http://127.0.0.1:3000/logements", {
        title: title,
        description: description,
        price: price,
        category: category,
        rooms: rooms,
        surface: surface,
        user_id: 1,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6">Créer une annonce</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Titre de l'annonce :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Prix (en €) :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            name="price"
            required
            onChange={(e) => setPice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Catégorie :
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            name="category"
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Sélectionner une catégorie</option>
            <option value="Appartement">Appartement</option>
            <option value="Maison">Maison</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rooms"
          >
            Nombre de pièces :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rooms"
            type="number"
            name="rooms"
            required
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="surface"
          >
            Surface (en m²) :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="surface"
            type="number"
            name="surface"
            required
            onChange={(e) => setSurface(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={postAnnonce}
          >
            Créer l'annonce
          </button>
        </div>
      </form>
    </div>
  );
};

export default Annonce;
