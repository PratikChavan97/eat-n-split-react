import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [totalBill, setTotalBill] = useState("");
  const [userBill, setUserBill] = useState("");
  const [pay, setPay] = useState("user");

  const friendsExpense = totalBill ? totalBill - userBill : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!totalBill || !userBill) return;
    onSplitBill(pay === "user" ? friendsExpense : -userBill);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={totalBill}
        onChange={(e) => setTotalBill(e.target.value * 1)}
      />

      <label>💵 Your Expense</label>
      <input
        type="text"
        value={userBill}
        onChange={(e) =>
          setUserBill(
            e.target.value * 1 > totalBill ? userBill : Number(e.target.value)
          )
        }
      />

      <label>💵 {selectedFriend.name}'s Expense</label>
      <input type="text" value={friendsExpense} disabled />

      <label>🧑‍🤝‍🧑 Who is Paying?</label>
      <select value={pay} onChange={(e) => setPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
