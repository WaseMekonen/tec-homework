import React, { useRef, useState } from "react";

function Login() {
  const [isValid, serIsValid] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function computeIsValid() {
    return (
      nameRef.current.value.length > 0 &&
      emailRef.current.value.length > 0 &&
      passwordRef.current.value.length > 0
    );
  }

  return (
    <div>
      <form
        onChange={() => {
          serIsValid(computeIsValid);
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (computeIsValid()) {
            console.log(
              nameRef.current.value,
              emailRef.current.value,
              passwordRef.current.value
            );
          } else {
            console.log("is not valid");
          }
        }}
      >
        <input type="text" ref={nameRef} placeholder="Name" />
        <br />
        <input type="email" ref={emailRef} placeholder="Email" />
        <br />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <br />
        <input type="submit" value="Login" disabled={!isValid} />
      </form>
    </div>
  );
}

export default Login;
