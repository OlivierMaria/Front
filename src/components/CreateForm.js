import React from "react";
import { Link } from "react-router-dom";

const CreateForm = () => {
  return (
    <div>
      <Link to="/annonce">
        <button>Crée une annonce</button>
      </Link>
    </div>
  );
};

export default CreateForm;
