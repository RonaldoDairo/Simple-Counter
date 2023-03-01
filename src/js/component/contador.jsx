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
    const btn = {
        marginTop: '5px',
        background : "blue",
        color : 'white',
        borderRadius: '20px',
        border : 'none',
        fontSize: '16px',
        height : '50px',
        width : '120px',
      
        
   }
   const texto ={
      background : 'black',
      color : 'white',
      width : '20%',
      margin : 'auto',
      fontSize:'3rem',
      borderRadius: '5px',
      

   }
    //style={{fontSize:'10rem', color: 'black'}}
    return (
      <div>
        <h1 style={texto} ><FontAwesomeIcon icon={faClock}/> 0 0 0 0 {counter}</h1>
        <button onChange={startInterval} style={btn} >Iniciar intervalo</button>
        </div>
    );
  }