import Animal from './Animal'
import { useState } from 'react';


const animals=['bird','cat','cow','dog','gator','horse']

function App(){
    const [count,setCount]= useState([]);


    const handleClick=()=>{
        const animal=animals[Math.floor(Math.random()*6)]
        
        const updated=(count)=>{
            return ([...count, <Animal key={count.length} type={animal}/>]) 
        }
        setCount(updated)
    }

    return (
    <div className='body'>
        <button onClick={handleClick}>Click Me!!!</button>
        <div className='img-body'>{count}</div>
    </div>
    )
}

export default App;