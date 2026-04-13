import { useState } from "react";
//ss
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const getUserData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const loginHandler = () => {
    console.log(user);
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
