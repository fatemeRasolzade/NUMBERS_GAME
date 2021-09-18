import React from 'react'

const ListElements = ({number, index, finishing, sortNumbers, handleDragStart, handleDragEnter}) => {
    return (
        <li
            className={finishing === true ?
                number === sortNumbers[index] ? "bg-success" : "bg-danger": "bg-secondary"}
            draggable= {finishing === true ? false : true}
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
