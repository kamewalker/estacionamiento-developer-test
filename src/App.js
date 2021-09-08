import React, {useState } from "react"

import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(undefined);
  const [startFlag,setStartFlag] = useState(false);
  const [selectedFloor, setFloor] = useState(undefined);
  const [selectedPlace, setPlace] = useState(undefined);
  const [parkFlag, setParkFlag] = useState(false);
  const [freeSpaceFlag, setFreeSpaceFlag] = useState(false);

  const createRandomParkingSpaceArray = (length) =>{
    return Array.from(Array(length)).map(x => Math.floor(Math.random()*2) === 1 ? "vacio" : "lleno")
  }

  const dummieData = {
    flor1: {
      places: createRandomParkingSpaceArray(10)
    },
    floor2: {
      places: createRandomParkingSpaceArray(10)
    },
    floor3: {
      places: createRandomParkingSpaceArray(10)
    }
  }

  const handleStart = () => {
    console.log("Begining system");
    setData(dummieData);
    setStartFlag(true);
  }

  const handleExit = () => {
    console.log("System Closed");
    setData(undefined);
    setStartFlag(false);
    setParkFlag(false);
    setFreeSpaceFlag(false);

  }

  const handleParkCar = () => {
    console.log("Parking Car...")
    setParkFlag(true);
    setFreeSpaceFlag(false);
  }

  const handleFreeParkingSpace =() => {
    console.log("Freeing space...")
    setParkFlag(false);
    setFreeSpaceFlag(true);
  }

  const handleSubmit = () => {
    console.log("Updating values...")
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <div className="Button-group">
        <div className="First-buttons">
          <button onClick={() => handleStart()}>
              Iniciar
            </button>
            <button onClick={() => handleExit()}>
              Salir
            </button>
        </div>
        <div className="Second-buttons">
          <button onClick={() => handleFreeParkingSpace()}>
            Liberar Lugar</button>
          <button onClick={()=> handleParkCar()}>
            Estacionar Coche</button>
        </div>
      </div>

      <div className="Input-fields">
        <input
          type="input"
          className= "input-floor"
          disabled={startFlag && (parkFlag || freeSpaceFlag) ? false : true }
          placeholder = {"Piso"}
          onChange= {e => setFloor(e.target.value)}
        /> 
        <input 
          type="input"
          className= "input-place"
          disabled={startFlag && (parkFlag || freeSpaceFlag) ? false : true }
          placeholder={"Lugar"}
          onChange= {e => setPlace(e.target.value)}
        />
        <button onClick={()=> handleSubmit()}>
          {"-->"}
        </button>
      </div>
      </header>

    </div>
  );
}

export default App;
