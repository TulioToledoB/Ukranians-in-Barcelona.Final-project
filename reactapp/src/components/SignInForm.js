import React from "react";
import "./SignInForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//cuando ya este lists la pagina a donde dirigir si el login es exitoso, se   importa navigate import {useNavigate} from 'react-router-dom';
const SignInForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const  navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    // Aquí haces la llamada al backend para iniciar sesiónn
    try {
      const response = await fetch("https://backend-amber-three-41.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // para enviar/recibir cookies
      });
      const data = await response.json();

      if (response.status === 200 && data.success) {
        alert("Succesful login");
        props.setIsUserSignedIn(true);
        navigate("/");

        // navigate("/la ruta que correponda para ir a la nueva pagina que falta crear");
      } else {
        alert("Try again");
        console.error("Failed to sign in");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      alert("Error during signing in");
    }
  };

 return (
  <div className='bodyIn'>
    <form onSubmit={handleSignIn} className="login-form">
      <div className="container">
        <h1>Sign in here</h1>
        <p className="create">
          Please fill in this form to enter in your account
        </p>
        <hr />
        <label htmlFor="email">
          <b>Email</b>
        </label>

        <input
          type="text"
          placeholder="Enter Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          id="psw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign in</button>
      </div>

      <div className="container" style={{ backgroundColor: "#f1f1f1" }}></div>
    </form>
  </div>
  );
};

export default SignInForm;
