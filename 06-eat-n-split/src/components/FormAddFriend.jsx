import React, { useState } from 'react'
import { Button } from './Button';

export const FormAddFriend = ({ handleAddFriend }) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState("https://i.pravatar.cc/48");



  const handleSubmit = function (e) {
    e.preventDefault();
        const id = crypto.randomUUID()

      const newFriend = {
          id,
          name,
          image: `${image}?=${id}`,
        balance:0
      }
      handleAddFriend(newFriend);
      setName('')
      setImage("https://i.pravatar.cc/48");
  
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏼‍🤝‍👨🏻 Friend name</label>
      <input
        type="text"
        name="name"
              onChange={({ target }) => setName(target.value)}
              value={name}
      />

      <label>🎴 Image URL</label>
      <input
        type="text"
        name="image"
        onChange={({ target }) => setName(target.value)}
        value={image}
      />
      <Button>Add</Button>
    </form>
  );
};
