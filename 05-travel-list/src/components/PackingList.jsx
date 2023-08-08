import React, { useState } from 'react'
import { Item } from './Item';
import './Travel-list.css'

export const PackingList = ({items ,onDeleteItem,onToggleItem,clearList}) => {
  const [sortBy, setSortBy] = useState('input')
  console.log(sortBy) 
  let sortedItem;
  if (sortBy == 'input') sortedItem = items.slice();
  if (sortBy == 'description') sortedItem = items.slice().sort((a, b) => (a.description).localeCompare(b.description));
  if (sortBy == 'packed') sortedItem = items.slice().sort((a, b) => a.packed - b.packed);
  return (
    <div className='list'>
      
      <ul>
        {sortedItem.map(item => <Item onDeleteItem={onDeleteItem} key={item.id} item={item} onToggleItem={onToggleItem} />)}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={'input'} >Sort by input order</option>
          <option value={'description'} >Sort by description</option>
          <option value={'packed'} >Sort by packed status</option>
        </select>
        {items.length ?  <button onClick={clearList}>Clear List</button> : null}
      </div>
    </div>
  )
}
