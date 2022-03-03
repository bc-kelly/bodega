import React from 'react'

function InventoryItemCard({item, handleClick, handleDeleteClick}) {
    const { id } = item;
  
    function theDeleteClick() {
        handleDeleteClick(id);
    }
    
    return(
        <div className="card" onClick={handleClick}>
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={theDeleteClick}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;

