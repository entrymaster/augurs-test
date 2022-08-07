import React from 'react'
import classes from "./BoxFirst.module.css"

const BoxFirst = (props) => {
  return (
    <div className={classes.mainContainer}>
        <div className={classes.statusSection}>
            <div><span className={classes.textSection}>ID :</span> {props.content.code} </div><div className={props.content.restaurantStatus==="OPEN"?classes.openStatus:classes.closeStatus}>{props.content.restaurantStatus}</div>
        </div>
        <div><span className={classes.textSection}>Total order :</span> {props.content.totalOrder} </div>
        <div><span className={classes.textSection}>Complete order :</span> {props.content.completedOrder} </div>
        <div><span className={classes.textSection}>Placed order :</span> {props.content.placedOrders} </div>
        <div><span className={classes.textSection}>Preparing order :</span> {props.content.preparingOrders} </div>
        <div><span className={classes.textSection}>Cancelled order :</span> {props.content.canceledOrders} </div>
    </div>
  )
}

export default BoxFirst