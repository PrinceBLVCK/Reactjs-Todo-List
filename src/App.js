import React, {useState} from  'react'
import './App.css';

function App() {

  // State Hook - useState
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])

  // Helper Functions
  const addItem = () => {
    if(!newItem){
      alert('Enter an item')
      return
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item])
    setNewItem('')
  }

  const deleteItem = (id) => {
    const newArr = items.filter(item => item.id !== id)
    setItems(newArr)
  }

  return (
    <div className="App">
     {/* 1. Header */}
     <h1>ToDo list</h1>

     {/* 2. Input and button */}
     <input 
      type='text' 
      placeholder='Add an Item'
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />
     <button className='add-btn' onClick={addItem} >Add</button>

     {/* 3. Unordered list  */}
     <ul>
      {items.map(item => {
        return (
          <li key={item.id}>{item.value}<button className='delete-btn' onClick={() => deleteItem(item.id)}>❌</button> </li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
