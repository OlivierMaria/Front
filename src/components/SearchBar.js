import React, { useState } from "react";

const SearchBar = () => {
  const [propertyType, setPropertyType] = useState([]);
  const [budgetChecked, setBudgetChecked] = useState(false);
  const [surfaceChecked, setSurfaceChecked] = useState(false);
  const [roomsChecked, setRoomsChecked] = useState(false);

  const handlePropertyTypeChange = (e) => {
    const value = e.target.value;

    if (propertyType.includes(value)) {
      // Décoche l'option si elle est déjà sélectionnée
      setPropertyType(propertyType.filter((type) => type !== value));
    } else {
      // Ajoute l'option sélectionnée
      setPropertyType([...propertyType, value]);
    }
  };

  const handleBudgetChange = () => {
    setBudgetChecked(!budgetChecked);
  };

  const handleSurfaceChange = () => {
    setSurfaceChecked(!surfaceChecked);
  };

  const handleRoomsChange = () => {
    setRoomsChecked(!roomsChecked);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              name="propertyType"
              value="appartement"
              checked={propertyType.includes("appartement")}
              onChange={handlePropertyTypeChange}
              className="mr-2"
            />
            Appartement
          </label>
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              name="propertyType"
              value="maison"
              checked={propertyType.includes("maison")}
              onChange={handlePropertyTypeChange}
              className="mr-2"
            />
            Maison
          </label>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={budgetChecked}
              onChange={handleBudgetChange}
              className="mr-2"
            />
            Prix
          </label>
          {budgetChecked && (
            <select className="ml-2 bg-white text-black">
              <option value="">Toutes les tranches</option>
              <option value="0-100000">$0 - $100,000</option>
              <option value="100000-200000">$100,000 - $200,000</option>
              <option value="200000-300000">$200,000 - $300,000</option>
            </select>
          )}
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={surfaceChecked}
              onChange={handleSurfaceChange}
              className="mr-2"
            />
            Surface
          </label>
          {surfaceChecked && (
            <select className="ml-2 bg-white text-black">
              <option value="">Toutes les tranches</option>
              <option value="0-50">0 - 50 m²</option>
              <option value="50-100">50 - 100 m²</option>
              <option value="100-150">100 - 150 m²</option>
            </select>
          )}
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={roomsChecked}
              onChange={handleRoomsChange}
              className="mr-2"
            />
            Nombre de pièces
          </label>
          {roomsChecked && (
            <select className="ml-2 bg-white text-black">
              <option value="">Toutes les tranches</option>
              <option value="1">1 pièce</option>
              <option value="2">2 pièces</option>
              <option value="3">3 pièces</option>
            </select>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
