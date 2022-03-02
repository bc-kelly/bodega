import React, { useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [onAddItem, setOnAddItem] = useState('')


    // handleAddToInventory () {
    //     setOnAddItem()
    // }

    return(
        <div className="container">
            <CurrentInventoryList 
                onClick={(event) => {setOnAddItem(event.target.id)}}
            />
            <ReorderInventoryList
                addedItems={onAddItem}
            />
        </div>
    );
}

export default InventoryManager;