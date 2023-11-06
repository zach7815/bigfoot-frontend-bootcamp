import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import AllSightings from "./components/pages/Sightings";
import Home from "./components/pages/Sightings/Home";

import SightingDetails from "./components/templates/FullSightingDetails";



const App = () => {

  const navigate = useNavigate();



  const handleClick =  (e) => {
    e.preventDefault();
       navigate("/sightings");
  };



  return (
    <div className="App">


          <Routes>
            <Route
              path="/"
              element={
                <Home handleClick={handleClick}/>
              }
            />
            <Route path="/sightings" element={<AllSightings />} />
            <Route path="/sightings/:reportNumber" element={<SightingDetails />} />
          </Routes>


    </div>
  );
};

export default App;