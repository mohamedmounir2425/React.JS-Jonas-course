import React, { useState } from "react";

export const Form = ({onAddItems}) => {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description) return;
    const newItem = {description,quantity,packed:false,id:Date.now()}
    console.log(newItem)
    onAddItems(newItem)
    setDescription('')
    setQuantity(1)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for you 😍 trip ?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
       
        }}
      />
      <button>ADD</button>
    </form>
  );
};
