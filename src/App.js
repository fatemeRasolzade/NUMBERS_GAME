import React, { useEffect, useState } from 'react'

const array = () => {
  let arr = []
  for (let j = 0; j < 5; j++) {
    let randomNumber = Math.floor(Math.random() * 50)
    arr.push(randomNumber)
  }
  return arr
}

const App = () => {

  const [dragNumber, setDragNumber] = useState();
  const [numbers, setNumbers] = useState(array);
  const [win, setWin] = useState(0);
  const [playing, setPlaying] = useState(false)
  const [userNumbers, setUserNumbers] = useState([]);
  const [sortNumbers, setSortNumbers] = useState([]);

  useEffect(() => {
    
  }, [numbers])

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
    // console.log(newNumbers);
    // console.log(sortnumbers);
    // setUserNumbers(newNumbers)
    setSortNumbers(sortnumbers)
    // console.log(userNumbers);
    // console.log(sortNumbers);
    arraysEqual(sortnumbers,newNumbers)
    // setTimeout(() => {
      
    //   arraysEqual(sortNumbers, userNumbers)
    // }, 2000);
  };

  const arraysEqual = (a, b) => { 
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]){
        return false;
      } 
    }
    console.log("Win");
    // setWin(1)
    return true;
  }

  return (
    <div className="App">
        <ul className="number-container">
          {numbers.map((n, index) => (
              <li
                // className={win !== 0 ?
                //                win === 1 ?
                //                   "bg-success":"bg-danger":"bg-secondary"
                                
                //                 }
                draggable
                key={index}
                onDragStart={() => handleDragStart(index)}
                onDragEnter={(e) => handleDragEnter(e, index)}
                onDragOver={(e) => e.preventDefault()}
              >
                {n}
              </li>
          ))}
        </ul>
    </div>
  )
}

export default App
