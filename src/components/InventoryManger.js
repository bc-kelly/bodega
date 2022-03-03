import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    // const [onAddItem, setOnAddItem] = useState([])
    const [onInventory, setOnInventory] = useState([])
    const [reOrderData, setReOrderData] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:8001/inventory')
        .then(resp => resp.json())
        .then(bodegaData => {
            console.log(bodegaData);
            setOnInventory(bodegaData);
        });
    }, []);
    console.log(reOrderData);

    function handleDeleteClick(id) {
        fetch(`http://localhost:8001/inventory/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            const updatedInventory = onInventory.filter((q) => q.id !== id);
            setOnInventory(updatedInventory);
          });
      }
    return(
        <div className="container">
            <CurrentInventoryList 
               allInventory={onInventory}
               reOrderData={reOrderData}
                setReOrderData={setReOrderData}
                handleDeleteClick={handleDeleteClick}
            />
            <ReorderInventoryList
                reOrderData={reOrderData}
                setReOrderData={setReOrderData}
                handleDeleteClick={handleDeleteClick}
            />
        </div>
    );
}

export default InventoryManager;


// think I might need to pass stuff from current inventory to the inventory manager in order for it to show on the screen, might have needed to put the fetch in the inventor manager instead of the inventory list, then passed that in as a prop to inventory list, then done map in there. and then passed everything to the cards
