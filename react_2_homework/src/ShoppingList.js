import React from 'react'

const ShoppingList = ({items}) => {
    if (items.length === 0) {
        return <p>Список покупок пуст</p>;
    }

  return (
    <div>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ShoppingList