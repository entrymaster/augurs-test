import React from "react";
import classes from "./BoxSecond.module.css";

const BoxSecond = (props) => {
  return (
    <div className={classes.mainConatiner}>
      <div className={classes.headingContainer}>Top Selling Items</div>
      {props.content.top_selling_item.map((item) => {
        return (
          <>
            <div className={classes.ImageSection}>
              <img src={"https://brbun.com/super_admin/assets/uploads/food_menu_images/"+item.food_menu_image} alt={item.food_menu_image} className={item.food_menu_image!=="NA"?classes.imageContainer:classes.boxConatiner} />
              <div className={classes.textSection}>
                {item.food_menu_name} * {item.sell_qty}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BoxSecond;
