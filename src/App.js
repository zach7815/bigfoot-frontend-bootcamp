import React, { useState, useMemo } from "react";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";
import StyledButton from "./components/atoms/styledButton";
import { Routes, Route, useNavigate } from "react-router-dom";
import AllSightings from "./components/pages/Sightings";
import BigFootContext from "./SightingsContext";
import SightingDetails from "./components/templates/FullSightingDetails";
import FilterForm from "./components/organisms/FilterForm";


const App = () => {
  const [sightingsData, setSightingsData] = useState();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/sightings");
      const { data } = result;
      setSightingsData(data);
      navigate("/sightings");
    } catch (error) {
      console.log("fetch data was unsuccessful:", error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await fetchData();
    } catch (error) {
      console.log("fetch data was unsuccessful:", error);
    }
  };

  const memoizedDataArray = useMemo(() => [sightingsData], [sightingsData]);

  return (
    <div className="App">
      <BigFootContext.Provider value={memoizedDataArray}>

          <Routes>
            <Route
              path="/"
              element={
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />

                  <FilterForm/>
                  <StyledButton variant="contained" onClick={handleClick}>
                    Discover BigFoot
                  </StyledButton>
                </header>
              }
            />
            <Route path="/sightings" element={<AllSightings />} />
            <Route path="/sightings/:reportNumber" element={<SightingDetails />} />
          </Routes>

      </BigFootContext.Provider>
    </div>
  );
};

export default App;