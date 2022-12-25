import React, { useEffect, useState } from "react";
// import Button from "../Components/Button";
import styled from './showDetails.module.css';

const ShowDetails = () => {
  const [data, setData] = useState([]);
  
  const fetchData = () => {
    fetch("https://erin-fine-salamander.cyclic.app/showDetails")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);


  return (
    <div>
      
      {data.length == 0 ? (
        <h1>no details found</h1>
      ) : (
        data &&
        data.map((e) => (
          <div className={styled.main_div} key={e.picture.large}>
         
          <div><img src={e.picture.large} /></div>
          <div>Name:- <b>{e.name.first+" "+e.name.last}</b></div>
          <div>Gender:- <b>{e.gender}</b></div>
          <div>Location:- <b> {e.location.city}</b></div>
          <div>Email:-  <b>{e.email}</b></div>
  
          </div>
        ))
      
      )}
    </div>
  );
};

export default ShowDetails;
