import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import List from './components/List';
import Alert from './components/Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) return JSON.parse(localStorage.getItem('list'))
  else return []
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //name value is null show Alert : name cannot be empty
      showAlert(true, 'danger', 'Please Enter A Value')
    }
    else if (name && isEditing) {
      //edititing Array List
      setList(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item;
      })
      )
      setEditId(null)
      setName('')
      setIsEditing(false)
      showAlert(true, 'success', 'Item Edited')
    }
    else {
      const newItem = { id: crypto.randomUUID(), title: name }
      setList([...list, newItem])
      setName('')
      showAlert(true, 'success', 'Item Added to List')
    }
  }

  //utlity function for showAlert
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  }

  //a function to clear all the items
  const clearList = () => {
    setList([])
    showAlert(true, "success", "List Cleared")
  }

  //a function to remove single item from list
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
    showAlert(true, "danger", "Item Removed")
  }
  //a function to edit  item from list
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return (
    <section className='section-center'>

      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>

        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g. milk'
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <button type='submit' className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
        </div>

      </form>

      {
        list.length > 0 &&
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>clear Items</button>
        </div>
      }
    </section>
  );
}

export default App;
