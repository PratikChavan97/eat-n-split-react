import React, { useState } from "react";
import initialFriends from "./data.js";
import FriendsList from "./components/FriendsList.js";
import Button from "./components/Button.js";
import FormAddFriend from "./components/FormAddFriend.js";
import FormSplitBill from "./components/FormSplitBill.js";

function App() {
  const [friends, setFriends] = useState(initialFriends);

  function addFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={handleSelectedFriend}
          friend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend addFriend={addFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
