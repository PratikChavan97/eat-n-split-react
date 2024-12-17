import React from "react";
import Friend from "./Friend";

function FriendsList({ friends, selectedFriend, friend }) {
  return (
    <ul>
      {friends.map((el) => {
        return (
          <Friend
            friend={el}
            key={el.id}
            selectedFriend={selectedFriend}
            person={friend}
          />
        );
      })}
    </ul>
  );
}

export default FriendsList;
