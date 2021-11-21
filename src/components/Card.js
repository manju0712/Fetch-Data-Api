import React  from "react";
import Avatar from 'react-avatar';

const Card = ({ user, handleClick }) => {
  return (
    <div>
        <div>
            <Avatar name={user.name} maxInitials={1} size="75" round={true} textSizeRatio={2}/>
         </div>

         <h5>{user.name}</h5>
         <h6><i> @{user.username}</i></h6>
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