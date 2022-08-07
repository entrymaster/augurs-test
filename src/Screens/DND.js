import React from "react";
import classes from "./DND.module.css";
import { TailSpin } from 'react-loader-spinner';

export const DND = () => {

  const [isActive, setIsActive] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [pickCoord, setPickCoord] = React.useState({})
  const dropRef = React.useRef();
  const dragRef = React.useRef();

  const dragUrl = "https://timesascent.com/image/Asset%2022.png";
  const dropUrl = "https://entrymaster.gumlet.io/media/2022/07/28/1658989881.png";

  const loadGumletScript = () => {
    return new Promise(function (resolve, reject) {
      // Checks if the script is already loaded on the page
      if (document.querySelector("script#gumlet-sdk-script")) {
        resolve();
      } else {
        window.GUMLET_CONFIG = {
          hosts: [{
            current: "https://promote.onecorp.co.in",
            gumlet: "entrymaster.gumlet.io"
          }],
          lazy_load: true
        };
        // Loads the script and appends it on the page
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/gumlet.js@2.1/dist/gumlet.min.js";
        script.id = "gumlet-sdk-script";
        script.sync = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      }
    });
  }

  console.log(pickCoord)

  React.useEffect(() => {
    loadGumletScript();
  });

  const onDragOver = (e) => {
    // console.log(e.pageY - dragRef.current.offsetTop)
    e.preventDefault();
  };

  const onDragStart = (e) => {
    e.dataTransfer.setData("id", "stamp");
  };

  const onDrop = (e, cat) => {
    setLoading(true)
    let id = e.dataTransfer.getData("id");
    // console.log(e)
    //     const res = document.getElementById("mycont");S
    // console.log("top : "+)
    id === "stamp" && generateUrl((e.clientY - dropRef.current.offsetTop - pickCoord.y), (e.clientX - dropRef.current.offsetLeft - pickCoord.x));
  };

  const generateUrl = (top, left) => {
    console.log(top + " " + left)
    load_pic(dropUrl + "?overlay=" + dragUrl + "&overlay_left=" + left + "&overlay_top=" + top);
  }

  async function load_pic(url) {

    const options = {
      method: "GET"
    }

    let response = await fetch(url, options)

    if (response.status === 200) {

      const imageBlob = await response.blob()
      const imageObjectURL = URL.createObjectURL(imageBlob);

      const image = document.createElement('img')
      image.classList.add(classes.mainImg);
      image.src = imageObjectURL

      setIsActive(false)
      const container = document.getElementById("mycont")
      container.append(image)
      setLoading(false)
    }
    else {
      console.log("HTTP-Error: " + response.status)
    }
  }



  return (
    <div className={classes.mainContainer}>

      <div className={classes.dragZone}>
        <div
          key="stamp"
          className={classes.imageCont}
          onDragStart={onDragStart}
          draggable={true}
        >
          <img
            ref={dragRef}
            onMouseDown={(e) => setPickCoord({
              x: e.clientX - dragRef.current.offsetLeft,
              y: e.clientY - dragRef.current.offsetTop
            })}
            
            className={classes.dragImage}
            src={dragUrl}
            alt={"main"}
          />
        </div>
      </div>
      <div id="mycont" className={classes.dropZone}>
        {
          loading && <div className={classes.loader}><TailSpin height={50} width={50} color='white' ariaLabel="loading" /></div>

        }
        {
          isActive && <img
            ref={dropRef}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, "complete")}
            className={classes.mainImg}
            src={dropUrl}
            alt={"main"}
          />
        }

      </div>
    </div>
  );
};