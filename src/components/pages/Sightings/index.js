import React, { useState, useEffect } from "react";
import ResultsTable from "../../organisms/styledTable";
import Title from "../../atoms/styledH1";
import axios from "axios";

const AllSightings = () => {
  const [sightingsData, setSightingsData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/sightings");
      const { data } = result;
      return data;
    } catch (error) {
      console.log("fetch data was unsuccessful:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setSightingsData(data);
      console.log(data)
    };

    getData();
  }, []);

  return (
    <>
      <Title>Big Foot Sightings</Title>
      <ResultsTable sightingsData={sightingsData} />
    </>
  );
};

export default AllSightings;