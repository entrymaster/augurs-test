import React from 'react'
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

function App() {
  return (
    <div className='App'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      
      <Router>
      <Routes>
      <Route path="/" element={<Login />} />
              {/* <Route path="/"> <Login /> </Route> */}
              <Route path="/signup" element={<SignUp />} />
              {/* <Route path="/signup">  */}
              </Routes>
              </Router>
    </div>
  )
}

export default App