import React from 'react'
import './Travel-list.css'
export const Stats = ({items}) => {

  if (!items.length) return <p className='stats'>
    <em>
      Start adding some items to your packing list 🚀
    </em>
    
  </p>


  const numItems = items.length;

  const numPacked = items.filter(item => item.packed).length;
  const presentage = Math.round((numPacked  / numItems ) * 100)


  return (
      <div className='stats'>
          <em>
           {presentage === 100 ? `You got everything! Ready to go ✈` : `    You have ${numItems} items on your list, and you already pack ${numPacked} (${presentage}%)`}
          </em>
    </div>
  )
}
