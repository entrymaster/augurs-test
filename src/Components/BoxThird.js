import React from "react";
import classes from "./BoxThird.module.css";

const BoxThird = (props) => {
  return (
    <div className={classes.mainConatiner}>
      <div className={classes.headingContainer}>Populor menu</div>
      {props.content.popular_menu.map((item) => {
        return (
          <div className={classes.ImageSection}>
            <img src={item.image} alt={item.image} height={"60px"} width={"60px"}/>
            <div className={classes.textSection}>{item.food_menu_name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BoxThird;
