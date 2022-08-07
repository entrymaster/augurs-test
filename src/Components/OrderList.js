import React from "react";
import classes from "./OrderList.module.css";

const OrderList = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.heading}>Order List</div>
      {props.content.newOrderList.map((item)=>{
        return(
        <div className={classes.orderListContainer}>
        <div className={classes.oederListSection}>
          <div className={classes.statusSection}>
            <div><span className={classes.textSection}>Order ID :</span> {item.orderId}</div>
            <div className={classes.status}>{item.orderStatus}</div>
          </div>
          <div><span className={classes.textSection}>Customer Name :</span> {item.customer_name}</div>
          <div><span className={classes.textSection}>
            Food Name :   </span>{item.foodName}
          </div>
          <div><span className={classes.textSection}>Extra message :</span> {item.extraMessage?item.extraMessage:"N/A"}</div>
        </div>
        <div className={classes.oederListSection}>
          <div><span className={classes.textSection}>restaurant Amount :</span> {item.restaurantAmount}</div>
          <div><span className={classes.textSection}>Total Price :</span>{item.total_price}</div>
          <div><span className={classes.textSection}>Payment type :</span>{item.payment_type}</div>
          <div><span className={classes.textSection}>Delivery charge :</span> {item.delivery_charge}</div>
        </div>
      </div>
        )
      })}
      
    </div>
  );
};

export default OrderList;
