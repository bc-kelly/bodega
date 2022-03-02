import React, { useState, useEffect } from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList() {
    const [onInventory, setOnInventory] = useState([])

    useEffect(() => {
        fetch('http://localhost:8001/inventory')
        .then(resp => resp.json())
        .then(bodegaData => {
            console.log(bodegaData);
            setOnInventory(bodegaData);
           
        })
    }, [])


    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
               {onInventory.map((item) => {
                   return (
                    <InventoryItemCard
                        key={item.id}
                        itemName={item.name}
                        itemImage={item.image}
                        itemPrice={item.price}
                    />
                   )
                })
            }
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