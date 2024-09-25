import React from "react";
import Friends from "./Friends";

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, i) => {
        return (
          <Friends
            friend={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}

export default FriendsList;
