
import React from 'react';
import classes from './SignUp.module.css';
import { AiOutlineUserAdd } from "react-icons/ai";


const SignUp = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState({ firstName: '', lastName: '' });
  const [profileImage, setProfileImage] = React.useState();
  const [error, setError] = React.useState({});

  const SignUpValidation = () =>{
    let errors = {};
    let isValid = true;
    if (!name.firstName || !(/^[A-Za-z]+$/).test(name.firstName)) {
      errors.firstName = "First Name is Invalid !";
      isValid = false;
    }
    if (!name.lastName || !(/^[A-Za-z]+$/).test(name.lastName)) {
      errors.lastName = "Last Name is Invalid !";
      isValid = false;
    }
    if (!email || !(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(email)) {
      errors.email = "Invalid Email !";
      isValid = false;
    }
    if(!password || !(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).test(password)){
      error.password = "Invalid Password !";
      isValid = false;
    }
    if(confirmPassword === "" || password !== confirmPassword){
      error.confirmPassword = "Password didn't match !";
      isValid = false;
    }



    setError({ ...error, ...errors })

    if (isValid) {
      SignUpAPI()
    }

  }

  const SignUpAPI = () => {
    try {
      setLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "email": email,
        "password": password,
        "name": name.firstName +' '+ name.lastName
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://boatwash.balajeekabachpan.org/public/api/register", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status){
            alert(result.message)
          }
          else{
            alert("Something went wront !")
          }
        })
        .finally(()=>setLoading(false))
        .catch(error => console.log('error', error));

    } catch (error) {
      console.warn(error);
    }
  }

  const checkFileType = (e) => {
    setProfileImage(e.target.files[0])
  }

  return (
    // <div className="App">
    <div className={classes.mainContainer}>
      <div className={classes.formContainer}>
        <div className={classes.userIcon}>
          <AiOutlineUserAdd size={30} color={'#fff'} />
        </div>
        <h1 className={classes.heading}>SignUp</h1>

        <div className={classes.inputAreaLevel}>First Name<div className={classes.error_message}>{error.firstName}</div></div>
        <input
          className={classes.inputArea}
          placeholder={"Enter First Name"}
          type="text"
          value={name.firstName}
          onInput={() => { error.firstName = " " }}
          onChange={(e) => setName({...name, firstName: e.target.value})}
        />
        <div className={classes.inputAreaLevel}>Last Name<div className={classes.error_message}>{error.lastName}</div></div>
        <input
          className={classes.inputArea}
          placeholder={"Enter Last Name"}
          type="text"
          value={name.lastName}
          onInput={() => { error.lastName = " " }}
          onChange={(e) => setName({...name, lastName: e.target.value})}
        />
        <div className={classes.inputAreaLevel}>Email<div className={classes.error_message}>{error.email}</div></div>
        <input
          className={classes.inputArea}
          placeholder={"Enter Email"}
          type="text"
          value={email}
          onInput={() => { error.email = " " }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={classes.inputAreaLevel}>Password<div className={classes.error_message}>{error.password}</div></div>
        <input
          className={classes.inputArea}
          placeholder={"Password"}
          type="password"
          value={password}
          onInput={() => { error.password = " " }}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className={classes.inputAreaLevel}>Confirm Password<div className={classes.error_message}>{error.confirmPassword}</div></div>
        <input
          className={classes.inputArea}
          placeholder={"Confirm Password"}
          type="password"
          value={confirmPassword}
          onInput={() => { error.confirmPassword = " " }}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        <input type="file"
          name="image"
          accept=".png"
          onChange={(e) => checkFileType(e)} />
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
          <button className={classes.LoginButton} onClick={() => SignUpValidation()} type="submit">Sign Up</button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default SignUp;
