import './App.css';
import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarShipCard from './Components/StarShipCard';


export default function App () {
  //initialize state to hold starships data
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);    //tracks current page number

  //fetch starships data once the component mounts
  useEffect(() => {
    fetchStarships();
  }, [currentPage]);    

  function fetchStarships () {
    getAllStarships(currentPage) 
      .then((data) => {
        setStarships((prevStarships) => [...prevStarships, ...data.results]);
      })
      .catch((error) => {
        console.error("Error fetching starships:", error);
      });
  }

  function handleLoadMore() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <div className='starship-card-container3'>

      <h1>Star War Starships</h1>

      <div className='starship-card-container2'>
        {/*using the optional chaining operator - it allows you to safely access props and methods w/o throwing an error if array is undefined*/}
        <div className='starship-card-container1'>
        {starships?.map((starship) => (
          <StarShipCard key={starship.name} starship={starship} />
        ))}
        </div>

      </div>

      <div>
          <button onClick={handleLoadMore}>Load More</button>
      </div>

    </div>
  );
}