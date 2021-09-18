import React, { useEffect, useState } from 'react'
import ListElements from './components/ListElements'
// import ResetModal from './components/ResetModal'

const array = () => {
  let arr = []
  for (let j = 0; j < 8; j++) {
    let randomNumber = Math.floor(Math.random() * 99)
    const isNumber = arr.find(n => n === randomNumber)
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
  const [playing, setPlaying] = useState()
  const [win, setWin] = useState(false)
  const [sortNumbers, setSortNumbers] = useState([]);
  const [counter, setCounter] = useState(20)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    
    if(playing){
      let timer = setInterval(() => {
        if(win === true){
          clearInterval(timer)
          setPlaying(false)
          handleOpenModal()
        }else if( counter > 0){
          setCounter(counter-1)
        }else{
          setWin(false)
          clearInterval(timer)
          setPlaying(false)
          handleOpenModal()
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
    setPlaying(true)
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
    setWin(true)
    return true;
  }

  return (
    <div className="App">
        <ul className="number-container">
          <p style={{fontSize: '1.2rem'}}>Time left: <span className={counter<=5 ? "text-danger" : ""}>{counter}s</span></p>
          {numbers.map((n, index) => (
              <ListElements
              playing={playing}
                number={n}
                index={index}
                sortNumbers={sortNumbers}
                handleDragStart={handleDragStart}
                handleDragEnter={handleDragEnter}
              />
          ))}
        </ul>
        {/* <ResetModal
          open={openModal}
          handleClose={handleCloseModal}
        /> */} 
    </div>
  )
}

export default App
