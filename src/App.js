import "./App.css";
import React, { useState, useEffect } from "react";
import Details from "./components/Details";
import CardList from "./components/Cardlist";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(); 

  // Fetch user data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(USERS_URL).then((response) =>
        response.json()
      );
      setUsers(response);
    };
    fetchData();
  }, []); 

  const handleClick = (user, showDetails) => {
    if (showDetails) {
      setUser(user);
    } else {
      setUser(null);
    }
  };

  return (
    <div className="App">
      <h1> My First React App </h1>
      <p> Using jsonplaceholder API </p>
      {user == null ? (
        <CardList users={users} handleClick={handleClick} />
      ) : (
        <Details user={user} handleClick={handleClick} />
      )}
     
    </div>
  );
}

export default App;
