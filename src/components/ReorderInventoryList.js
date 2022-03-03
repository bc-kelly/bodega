import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({reOrderData, setReOrderData}) {

    const reorderItems = reOrderData.map((item) => {
        function handleClick() {
            const newReorderData = reOrderData.filter((otherItem) => {
                return otherItem !== item
            })
            setReOrderData(newReorderData);
        }
        return (
            <InventoryItemCard
                key={item.id}
                item={item}
                handleClick={handleClick}
            />
        )
    });

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderItems}
            </div>
        </div>
    );
}

export default ReorderInventoryList;