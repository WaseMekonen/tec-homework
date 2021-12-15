import React, { useState } from "react";

export default function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <h3>Login</h3>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault(), console.log(name, email, password);
          }}
        >
          Name:
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          email:
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          password:
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}
