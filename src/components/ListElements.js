import React from 'react'
import { useSpring, animated, useSprings } from 'react-spring'

const ListElements = ({number, index, finishing, sortNumbers, handleDragStart, handleDragEnter}) => {

    const styles = useSpring({
        from: { y: 300 },
        config: { duration: index*300 },
        loop: {y: 0},
      })

    return (
        <animated.div
            style={{...styles}}
        >
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
        </animated.div>
    )
}

export default ListElements
