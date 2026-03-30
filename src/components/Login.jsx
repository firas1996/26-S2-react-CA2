const Login = () => {
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
        style={{
          height: 24,
          width: 250,
          margin: 8,
          borderRadius: 8,
          padding: 3,
        }}
        type="text"
      />
      <input
        style={{
          height: 24,
          width: 250,
          margin: 8,
          borderRadius: 8,
          padding: 3,
        }}
        type="password"
      />
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: 18,
          marginTop: 12,
        }}
      >
        Login !
      </button>
    </div>
  );
};

export default Login;
