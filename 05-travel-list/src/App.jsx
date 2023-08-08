import { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 6, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems)
  const handleAddItems = (item) => {
    setItems(items => [...items, item])
  }
  const handleDeleteItem = (id) => {
    setItems(items => items.filter(item => item.id !== id))
  }
  const handleToggleItem = (id) => {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  const clearList = () => {
  
      const confirmed = window.confirm('Are you sure you want to clear list ?')

      if(confirmed) setItems([])
   
  }
  return (
    <>
      <Logo/>
      <Form onAddItems={ handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} clearList={clearList}/>
      <Stats items={items}  />
    </>
  )
}