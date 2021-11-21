import React  from "react"


const Card = ({ user, handleClick }) => {
  return (
    <div>
      <img
        alt=""
        src="/usericon.png"
        width="30"
        height="30"
      />

      <h4>{user.name}</h4>
      <h4>@{user.username}</h4>
      <p>
        <a href={"http://" + user.website}>http://{user.website}</a>
      </p>

      <div>
        <button type='submit' onClick={() => handleClick(user, true)}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default Card;