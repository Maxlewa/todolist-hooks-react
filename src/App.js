import React from 'react'
import './css/app.css'

export default function App() {
  return (
    <div>
      {/* TO DO LIST AREA */}
      <div id="bigdiv" className="py-5">
        {/* INPUT + BUTTON */}
        <div id="inputetbtn">
          <input type="text" placeholder="Votre tâche ?" id="inputbox" />
          <button id="btnadd"><span>+</span> Add</button>
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
            {/* 1 TACHE */}
            {/* <div class="divtache">
                    <div id="tachename">
                        <p class="tacheMot"></p>
                    </div>
                    <div id="threebuttons">
                        <button id="btncheck"><i class="fas fa-check-circle"></i></button>
                        <button id="btnedit"><i class="fas fa-save"></i></button>
                        <button id="btntrash"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div> */}
          </div>
          {/* CLEAR BTN */}
          <div id="divclear">
            <button id="btnclear">Clear list</button>
          </div>
          <div>
            <button id="btn-darkmode">Dark Mode</button>
          </div>
        </div>
      </div>
    </div>
  )
}

