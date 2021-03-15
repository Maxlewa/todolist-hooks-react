import React from 'react'
import {useState} from 'react'
import './css/app.css'
import List from './List';

export default function App() {

  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  }

  const addItemToList = () => {
    updateItemList([...itemList, {item: currentItem, key: Date.now()}])
    setCurrentItem("")
    console.log("list items", itemList);
  }

  const addItemToListEnter = (e) => {
    if (e.key === 'Enter') {
      updateItemList([...itemList, {item: currentItem, key: Date.now()}])
      setCurrentItem("")
      console.log("list items", itemList);
    }
  }

  const clearAll = () => {
    updateItemList([])
  }

  const darkMode = () => {
    document.body.style.filter = "invert(100%)"
  }

  return (
    <div>
      {/* TO DO LIST AREA */}
      <div id="bigdiv" className="py-5">
        {/* INPUT + BUTTON */}
        <div id="inputetbtn">
          <input type="text" placeholder="Votre tâche ?" id="inputbox" value={currentItem} onChange={onChangeHandler} onKeyDown={addItemToListEnter} />
          <button id="btnadd" onClick={addItemToList}><span>+</span> Add</button>
        </div>
        {/* TITRE */}
        <div id="divtitre">
          <h1 id="malisttitre">Ma To Do List</h1>
        </div>
        {/* TACHES WINDOW */}
        <div>
          {/* 3 BOUTONS */}
          <div id="divtroisbtn">
            <button id="btntermine" value="completed" className="py-2 mx-3">Terminé</button>
            <button id="btnafaire" value="uncompleted" className="py-2 mx-3">A faire</button>
            <button id="btntout" value="all" className="py-2 mx-3">Tout</button>
          </div>
          {/* TACHES LISTE */}
          <div id="divtachesliste">
            <List itemList={itemList} updateItemList={updateItemList}/>
          </div>
          {/* CLEAR BTN */}
          <div id="divclear">
            <button id="btnclear" onClick={clearAll}>Clear list</button>
          </div>
          <div>
            <button id="btn-darkmode" onClick={darkMode}>Dark Mode</button>
          </div>
        </div>
      </div>
    </div>
  )
}

