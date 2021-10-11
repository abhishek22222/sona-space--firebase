import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { auth, provider } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
  };
  function signUpButton(e){
		e.preventDefault();
		document.getElementById('container').classList.add("right-panel-active");
	}

  function signInButton(e){
    e.preventDefault();
    document.getElementById('container').classList.remove("right-panel-active");
  }

  

  return (
    <div className="login">
      <div className="container" id="container">
	<div className="form-container sign-up-container">
		<form className="form" action="#">
			<h1 className="h1">Create Account</h1>
			<div className="social-container">
				<a href="#" className="social a"><img
				onClick={signIn}
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              /></a>
				<a href="#" className="social a"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social a"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className="span">or use your email for registration</span>
			
			<input 
      className="input"
			type="email" 
			placeholder="Email"
			value={email}
            onChange={(e) => setEmail(e.target.value)} />
			<input 
      className="input"
			type="password" 
			placeholder="Password" 
			value={password}
            onChange={(e) => setPassword(e.target.value)}
			/>
			<button className="button" onClick={registerSignIn}>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form className="form" action="#">
			<h1 className="h1">Sign in</h1>
			<div class="social-container">
			<a href="#" className="social a"><img
				onClick={signIn}
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              /></a>
				<a href="#" className="social a"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social a"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className="span">or use your account</span>
			<input className="input" type="email" placeholder="Email" />
			<input className="input" type="password" placeholder="Password" />
			<a className="a" href="#">Forgot your password?</a>
			<button className="button" onClick={handleSignIn}>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className="h1">Welcome Back!</h1>
				<p className="p">To keep connected with us please login with your personal info</p>
				<button className="ghost button" id="signIn" onClick={signInButton} >Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className="h1">Hello, Friend!</h1>
				<p className="p">Enter your personal details and start journey with us</p>
				<button className="ghost button" id="signUp" onClick={signUpButton}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
    </div>
  );
}

export default Login;
