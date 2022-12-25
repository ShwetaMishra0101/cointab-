import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const buttonStyle = {
  height: "50px",
  width: "150px",
  background: "tomato",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};
const Button = () => {
  const [showDeleteButton,setShowDeleteButton] = useState(false)
  const navigate = useNavigate()


  const postDetails = async (details) => {
    console.log(details)
    await axios
      .post("https://erin-fine-salamander.cyclic.app/sendData", details)
      .then((res) => console.log(res))
      .catch((err)=> console.log(err))
  };

  const fetchDetails = async () => {
    for (let i = 0; i < 5; i++) {
      await fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => {
          postDetails(data.results[0]);
        })
        .catch((err) => console.log(err));
        setShowDeleteButton(true)
    }
    setShowDeleteButton(false)
    alert("Data Stored In Database")

  };

  const deleteDetails=()=>{
    axios.delete("https://erin-fine-salamander.cyclic.app/delete")
    alert("Data Deleted from MongoDb")
  }

  const showDetails=()=>{
    navigate("/details")
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        marginTop: "50vh",
      }}
    >
      <button onClick={fetchDetails} style={buttonStyle}>
        Fetch Users
      </button>
      <button onClick={deleteDetails} disabled={showDeleteButton} style={buttonStyle}>Delete Users</button>
      <button onClick={showDetails} disabled={showDeleteButton} style={buttonStyle}>User Details</button>
    </div>
  );
};

export default Button;
