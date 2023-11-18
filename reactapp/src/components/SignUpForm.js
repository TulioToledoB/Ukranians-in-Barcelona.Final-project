import React from "react";
import "./SignUpForm.css";
import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = {
      password: password, // Asegúrate de que este nombre coincida con tu backend
      email: email, // Asumiendo que quieres enviar el email también
    };

    // Aquí haces la llamada al backend para registrarse
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status == 200 && data.success) {
        alert("User register");
      } else {
        alert("Try again");
        console.error("Failed to sign up");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("Error");
    }
    setEmail("");
    setPassword("");
  };

  return (

    <div className='bodyIn'>
    <form
      action="action_page.php"
      style={{ border: "1px solid #ccc" }}
      onSubmit={handleSignUp}
    >
      <div className="in-container">
        <h1>Sign up here</h1>
        <p className="create">Please fill in this form to create an account.</p>
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

        <div className="clearfix">
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default SignUpForm;
///{isUserSignedUp && <button onClick={handleButtonClick}>Your Button</button>}
///const handleButtonClick = () => {

/// alert("Button clicked!");
///};
