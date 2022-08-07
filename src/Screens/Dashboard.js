import React from 'react'
import classes from "./Dashboard.module.css";
import { BsSearch } from "react-icons/bs";
import {TailSpin} from 'react-loader-spinner';
import BoxFirst from "../Components/BoxFirst";
import BoxSecond from "../Components/BoxSecond";
import BoxThird from "../Components/BoxThird";
import OrderList from "../Components/OrderList";

const Dashboard = ()=> {

  const restaurantId = "UE2ON"
  const [restID, setRestID] = React.useState('UE2ON');
  const [orderList, setOrderList] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});

  const validation = () =>{
    let errors = {};
    let isValid = true;
    
    if (!restID) {
      errors.id = "Enter Restaraunt ID !";
      isValid = false;
    }


    setError({ ...error, ...errors })

    if (isValid) {
      getDashboardDataAPI()
    }

  }

  const getDashboardDataAPI = async () => {
    try {
      setLoading(true);
      var formdata = new FormData();
      formdata.append("restaurantId", restaurantId);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      await fetch("https://cors-anywhere.herokuapp.com/https://brbun.aaratechnologies.in/super_admin/brbun_web_services/brbun_restaurant/getRestaurantOrderCount.php", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result){
            setOrderList(result);
          }
          else {
            alert("Sorry ! Couldn't fetch data")
          }
        })
        .finally(()=>setLoading(false))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.inputSection}>
        <input
          type={"text"}
          placeholder={"Enter resturant Id"}
          onChange={(e)=>setRestID(e.target.value)}
          className={classes.inputConatiner}
          value={restID}
          onInput={() => { error.id = " " }}
        />
        <BsSearch className={classes.bsSearch} onClick={()=>validation()} />
        <div className={classes.error_message}>{error.id}</div>
      </div>
      {
        orderList ? <>
        <div className={classes.boxSection}>
        <BoxFirst content={orderList} />
        <BoxSecond content={orderList} />
        <BoxThird content={orderList} />
      </div>
      <div className={classes.OrderListSection}>
        <OrderList content={orderList} />
      </div>
        </>
        :
        <div className={classes.noDataContainer}>
          {loading ? <div className={classes.loader}>
              <TailSpin height={30} width={30} color='red' ariaLabel="loading" />
            </div>: 'Search above ...'}
          </div>
      }
      
    </div>
  );
}

export default Dashboard