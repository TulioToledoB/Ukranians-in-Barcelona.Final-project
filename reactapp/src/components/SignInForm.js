import React from 'react';
import './SignInForm.css';

//import './SignInForm.css'; // Import your component-specific stylesheet

const SignInForm = ({ onSignIn }) => {
  // Define your form fields and handle form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    // Access the form data and send it to your authentication logic
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    onSignIn(formData);
  };

  return (
    <form action="/action_page.php" method="post" onSubmit={handleSignIn} className="login-form">
      

      <div className="container">
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required />

        <button type="submit">Sign in</button>
        <label>
          <input type="checkbox" defaultChecked name="remember" /> Remember me
        </label>
        
      </div>

      <div className="ccontainer" style={{ backgroundColor: '#f1f1f1' }}>
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  );
};

export default SignInForm;
