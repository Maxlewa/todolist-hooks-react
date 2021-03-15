import React from 'react'

export default function List(props) {

    const checkItemFromList = key => {

    }

    const editItemFromList = key => {
        
    }

    const deleteItemFromList = key => {
        const newList = props.itemList.filter((itemObj) => {
            return itemObj.key !== key;
        })
        props.updateItemList(newList)
    }

    return (
        <div>
            {props.itemList.map(itemObj => {
                return (
                <div key={itemObj.key} className="todo">
                    <p className="todo-item">{itemObj.item}</p>
                    <div className="threebuttons">
                        <button id="btncheck" className="complete-button" onClick={() => checkItemFromList(itemObj.key)}><i class="fas fa-check-circle"></i></button>
                        <button id="btnedit" className="edit-button" onClick={() => editItemFromList(itemObj.key)}><i class="fas fa-save"></i></button>
                        <button id="btntrash" className="trash-button" onClick={() => deleteItemFromList(itemObj.key)}><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
                )
            })}
        </div>
    )
}
