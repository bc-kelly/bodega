import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList({allInventory, reOrderData, setReOrderData, handleDeleteClick}) {


    const inventoryItems = allInventory.map((item) => {
        function handleClick() {
            if (!reOrderData.includes(item)) {
                setReOrderData([...reOrderData, item]);
            } 
        }
        return (
         <InventoryItemCard
             key={item.id}
             item={item} 
             handleClick={handleClick}
             handleDeleteClick={handleDeleteClick}
         />
        )
        })

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
              {inventoryItems}
            </div>
        </div>
    );
}

export default CurrentInventoryList;

{/* check - have fetched the items
kind og check - need to get them onto the page
to do this have to get them into inventoryItemCard
have to pass the name image and price as props to the card
now that they're on the page i need to get their name and images to show up
something is wrong with my props 
 */}