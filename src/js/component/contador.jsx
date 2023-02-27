import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'

export function SecondsCounter() {

    const [counter, setCounter] = useState(0);    
    function startInterval() {
        setInterval(() => {
          setCounter(counter + 1);
        }, 1000);
      }
    
    return (
      <div>
        <h1 style={{fontSize:'10rem', color: 'black'}}><FontAwesomeIcon icon={faClock}/> 0 0 0 0 {counter}</h1>
        <button onClick={startInterval}>Iniciar intervalo</button>
        </div>
    );
  }