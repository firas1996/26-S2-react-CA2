import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const getUserData = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };
  const loginHandler = () => {
    console.log(user);
    axios
      .post("http://localhost:1122/users/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    // axios
    //   .get("http://localhost:1122/users/getUsers")
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70dvh",
      }}
    >
      <input
        type="text"
        style={{
          height: 24,
          width: 250,
          margin: 8,
          borderRadius: 8,
          padding: 3,
        }}
        name="email"
        onChange={getUserData}
        value={user.email}
      />
      <input
        type="password"
        style={{
          height: 24,
          width: 250,
          margin: 8,
          borderRadius: 8,
          padding: 3,
        }}
        name="password"
        onChange={getUserData}
        value={user.password}
      />
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: 18,
          marginTop: 12,
        }}
        onClick={loginHandler}
      >
        Login !
      </button>
    </div>
  );
};

export default Login;
