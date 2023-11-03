import React from 'react';
import './SignUpForm.css'

const SignUpForm = ({ onSignUp }) => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.psw.value, // Update the field name to match the HTML structure
      // Add more fields as needed
    };
    onSignUp(formData);
  };

  return (
    <form action="action_page.php" style={{ border: '1px solid #ccc' }} onSubmit={handleSignUp}>
      <div className="in-container">
        <h1>Sign Up</h1>
        <p className='create'>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

        <label>
          <input type="checkbox" defaultChecked name="remember" style={{ marginBottom: '15px' }} /> Remember me
        </label>

        <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

        <div className="clearfix">
          <button type="button" className="cancelbtn">Cancel</button>
          <button type="submit" className="signupbtn">Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
