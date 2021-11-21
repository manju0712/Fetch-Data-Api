import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function refreshPage() {
  window.location.reload(false);
}

const Details = ({ user, handleClick }) => {
  if (user) {
    return (
      <div>
        <div className="container-details">
          <ul>
            <li> name: {user.name}</li>
            <li>username: {user.username}</li>
            <li>email: {user.email}</li>
            <li>phone: {user.phone}</li>
            <li>company: {user.company.name}</li>
            <li>website: {user.website}</li>
            <li>address:</li>
            <ul>
              
              <li>street: {user.address.street}</li>
              <li>suite: {user.address.suite}</li>
              <li>city: {user.address.city}</li>
              <li>zipcode: {user.address.zipcode}</li>
            </ul>
          </ul>
        </div>
        <div>
          <button
            onClick={refreshPage}
            style={{ marginTop: "10px" }}
          >
            View All Users
          </button>
        </div>
      </div>
    );
  }
};



export default Details;
