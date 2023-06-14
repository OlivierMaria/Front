import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const login = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/login";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
      navigate("/properties"); // Redirige vers la page "properties" après la connexion
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo, setCurrUser);
    e.target.reset();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <button
          type="submit"
          className=" text-white px-4 py-2 rounded-md hover:bg-blue-600"
          style={{ backgroundColor: "#ae9371" }}
        >
          Login
        </button>
      </form>
      <div className="mt-4">
        Not registered yet,{" "}
        <Link to="/Signup" className="text-blue-500 font-medium">
          Signup
        </Link>{" "}
      </div>
    </div>
  );
};

export default Login;
