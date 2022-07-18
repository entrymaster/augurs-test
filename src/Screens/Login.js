
import React from 'react';
import classes from './Login.module.css';

import { AiOutlineUserAdd } from "react-icons/ai";


function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});


  const SignUpValidation = () =>{
    let errors = {};
    let isValid = true;
    
    if (!email || !(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(email)) {
      errors.email = "Invalid Email !";
      isValid = false;
    }
    if(!password || !(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).test(password)){
      error.password = "Invalid Password !";
      isValid = false;
    }



    setError({ ...error, ...errors })

    if (isValid) {
        LoginAPI()
    }

  }
  

  const LoginAPI = () => {
    try {
      setLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "email": email,
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://boatwash.balajeekabachpan.org/public/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          switch (result.status) {
            case 0:
              alert(result.message);
              break;
            case 1:
              alert(result.message.password);
              break;
            case 3:
              alert('Wrong Email or password');
              break;
            default:
              alert('Something unexpected happened !')
              break;
          }
          
        })
        .finally(()=>setLoading(false))
        .catch(error => console.log('error', error));

    } catch (error) {
      console.warn(error);
    }
  }

  return (
    // <div className="App">
      <div className={classes.mainContainer}>
        <div className={classes.formContainer}>
            <div className={classes.userIcon}>
                <AiOutlineUserAdd size={30} color={'#fff'} />
            </div>
        <h1 className={classes.heading}>Login</h1>

        <div className={classes.inputAreaLevel}>Email Address<div className={classes.error_message}>{error.email}</div></div>
          <input
            className={classes.inputArea}
            placeholder={"Enter Email"}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <div className={classes.inputAreaLevel}>Password<div className={classes.error_message}>{error.password}</div></div>
          <input
            className={classes.inputArea}
            placeholder={"Password"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.checkBoxContainer}>
            <input
            type={'checkbox'}
             />
             <div className={classes.checkBoxText}>Remember Me</div>
          </div>
          {
          loading && <div className={classes.loader}>Loading ...</div>
        }

        <div className={classes.signUpButton}>
        <button className={classes.LoginButton} onClick={() => LoginAPI()} type="submit">Login</button>
        </div>
      </div>
      </div>
  );
}

export default Login;
