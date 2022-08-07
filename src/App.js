import React from 'react'
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Dashboard from './Screens/Dashboard';
// import { DND } from './Screens/DND';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

function App() {
  
  return (
    <div className='App'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      
      <Router>
      <Routes>
      {/* <Route path="/" element={<DND />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/"> <Login /> </Route> */}
              <Route path="/signup" element={<SignUp />} />
              {/* <Route path="/signup">  */}
              </Routes>
              </Router>
    </div>
  )
}

export default App

// import React, { useEffect } from "react";
// import './App.css';

// function App() {
//   const dragUrl = "https://cdn4.accounts.shutterstock.com/public/images/ss-logo-color-2x-de64a370ef.png";
//   const loadGumletScript = () => {
//     return new Promise(function (resolve, reject){
//       // Checks if the script is already loaded on the page
//       if(document.querySelector("script#gumlet-sdk-script")){
//         resolve();
//       }else {
//         window.GUMLET_CONFIG = {
//             hosts: [{
//                 current: "https://api-preview.rozgaarindia.com",
//                     gumlet: "entrymaster.gumlet.io"
//             }],
//             lazy_load: true
//         };
//         // Loads the script and appends it on the page
//         const script = document.createElement("script");
//         script.src = "https://cdn.jsdelivr.net/npm/gumlet.js@2.1/dist/gumlet.min.js";
//         script.id = "gumlet-sdk-script";
//         script.sync = true;
//         script.onload = () => resolve();
//         document.body.appendChild(script);
//       }
//     });
//   }

//   useEffect(() => {
//     loadGumletScript();
//   });

//   return (
//     <div className="App">
//       {/* <img data-src="https://api-preview.rozgaarindia.com/rzstatic/assets1651817074.png/2022/06/16/1655374210.png" style={{width:"300px"}} blur={2.5} alt="gumlet logo" />
//       <img data-src="https://api-preview.rozgaarindia.com/rzstatic/assets1651817074.png/2022/06/16/1655374210.png" width={"250px"} blur={2.5} alt="gumlet logo" /> */}
//       <img data-src={"https://entrymaster.gumlet.io/rzstatic/assets1651817074.png/2022/06/16/1655374210.png?overlay=https://www.rozgaarindia.com/assets/JobAlerts/Check.svg"} style={{width:"500px", blur: 2.5}} blur={200} alt="gumlet logo" />
//     </div>
//   );
// }

// export default App;