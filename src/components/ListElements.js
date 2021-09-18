import React from 'react'

const ListElements = ({number, index, playing, sortNumbers, handleDragStart, handleDragEnter}) => {
    return (
        <li
            className={playing === false ?
                number === sortNumbers[index] ? "bg-success" : "bg-danger": "bg-secondary"}
            draggable
            key={index}
            onDragStart={() => handleDragStart(index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
            >
            {number}
        </li>
    )
}

export default ListElements
