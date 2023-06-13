import Signup from "../Pages/Signup.js";
import Login from "../Pages/Login.js";
import Logout from "./Logout";
import PrivateText from "./PrivateText.js";
import { useState, useEffect } from "react";

const User = () => {
  const [currUser, setCurrUser] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (currUser) {
      localStorage.setItem("currentUser", JSON.stringify(currUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currUser]);

  if (currUser) {
    return (
      <div>
        Hello {currUser.email}
        <PrivateText currUser={currUser} />
        <Logout setCurrUser={setCurrUser} />
      </div>
    );
  } else {
    return (
      <div>
        {show ? (
          <Login setCurrUser={setCurrUser} setShow={setShow} />
        ) : (
          <Signup setCurrUser={setCurrUser} setShow={setShow} />
        )}
      </div>
    );
  }
};

export default User;
