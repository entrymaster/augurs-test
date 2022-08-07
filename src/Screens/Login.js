
import React from 'react';
import classes from './Login.module.css';
import {TailSpin} from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

import { AiOutlineUserAdd } from "react-icons/ai";

const token = "c5jo4E_pSXE:APA91bE288T58fh5W-YdFokgVt-lhIkvMA-Bn56LB5-WECb__Myh179kjC_PWncdiUTOr78iRMv0yVcf0s3cZMxXynxPbzn8xiv3u8V9tSk8MApnbsBHc0pweZz1viBX8D-Hn1D0ByTY"


function Login() {

  let navigate = useNavigate();

  const [mobile, setMobile] = React.useState('9689462289');
  const [password, setPassword] = React.useState('Sachin@123');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});


  const LogInValidation = () =>{
    let errors = {};
    let isValid = true;
    
    if (!mobile || !(/^[0-9]{10}$/).test(mobile)) {
      errors.mobile = "Invalid Mobile !";
      isValid = false;
    }
    if(!password || !(/^(?=.*\d).{8,}$/).test(password)){
      error.password = "Minimum 8 characters and at least 1 number";
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
      var formdata = new FormData();
      formdata.append("mobileNumber", mobile);
      formdata.append("password", password);
      formdata.append("restaurantToken", token);
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("https://cors-anywhere.herokuapp.com/https://brbun.aaratechnologies.in/super_admin/brbun_web_services/brbun_restaurant/restaurantLogin.php", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.message === "Restaurant App Login Successful.."){
            navigate("/dashboard");
          }
          else if(result.code === 0){
            alert(result.message)
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
                <AiOutlineUserAdd size={30} color={'#464646'} />
            </div>
        <h1 className={classes.heading}>Login</h1>

        <div className={classes.inputAreaLevel}>Mobile Number<div className={classes.error_message}>{error.mobile}</div></div>
          <input
            className={classes.inputArea}
            placeholder={"Enter Mobile"}
            type="text"
            value={mobile}
            onInput={() => { error.mobile = " " }}
            onChange={(e) => setMobile(e.target.value)}
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
          {/* <div className={classes.checkBoxContainer}>
            <input
            type={'checkbox'}
             />
             <div className={classes.checkBoxText}>Remember Me</div>
          </div> */}

        <div className={classes.LoginButtonContainer}>
        <button className={classes.LoginButton} onClick={() => !loading && LogInValidation()} type="submit">
        {
              loading ?
            <div className={classes.loader}>
              <TailSpin height={15} width={15} color='#fff' ariaLabel="loading" />
            </div>
          :
          'Login'}
        </button>
        </div>
      </div>
      </div>
  );
}

export default Login;
