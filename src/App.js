import React, { useEffect, useState } from 'react'
import ListElements from './components/ListElements'

const array = () => {                       //create random array
  let arr = []
  for (let j = 0; j < 8; j++) {
    let randomNumber = Math.floor(Math.random() * 99)
    const isNumber = arr.find(n => n === randomNumber)     //No duplicate number
    if(!isNumber){
      arr.push(randomNumber)
    }else{
      j--
    }
  }
  return arr
}

const App = () => {

  const [dragNumber, setDragNumber] = useState();
  const [numbers, setNumbers] = useState(array);
  const [playing, setPlaying] = useState(false)
  const [finishing, setFinishing] = useState(false)
  const [sortNumbers, setSortNumbers] = useState([]);
  const [counter, setCounter] = useState(20)

  useEffect(() => {
    if(playing){
      let timer = setInterval(() => {
        if(finishing === true){            //Win
          clearInterval(timer)
        }else if( counter > 0){            //countinue
          setCounter(counter-1)          
        }else{                             //Time Left
          clearInterval(timer)
          setPlaying(false)
          setFinishing(true)
        }
      }, 1000);
      return () => clearInterval(timer)
    }
  }, [counter,playing])

  const handleDragStart = (index) => {
    setDragNumber(index);
    setPlaying(true)
  };
  
  const handleDragEnter = (e,index) => {
    const newNumbers = [...numbers];
    const item = newNumbers[dragNumber];
    newNumbers.splice(dragNumber, 1);
    newNumbers.splice(index, 0, item);
    setDragNumber(index);
    setNumbers(newNumbers);
    const sortnumbers = numbers.sort((a , b)=> a - b)
    setSortNumbers(sortnumbers)
    arraysEqual(sortnumbers,newNumbers)
  };

  const arraysEqual = (a, b) => { 
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]){
        return false;
      } 
    }
    setPlaying(false)
    setFinishing(true)
    return true;
  }

  return (
      <div className="App">
        <ul className="number-container">
          <p style={{fontSize: '1.2rem'}}>Time left: <span className={counter<=5 ? "text-danger" : ""}>{counter}s</span></p>
            {numbers.map((n, index) => (
              <ListElements
                playing={playing}
                finishing={finishing}
                number={n}
                index={index}
                sortNumbers={sortNumbers}
                handleDragStart={handleDragStart}
                handleDragEnter={handleDragEnter}
              />
            ))}
        </ul>
      </div>
  )
}

export default App
