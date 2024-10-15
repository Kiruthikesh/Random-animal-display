import './App.css'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import { useState } from 'react'




function Animal({type}){
    const [size,setSize]=useState(0);

    const changeBig=()=>{
        setSize(size+1); 
    }
   const svgMap={
        bird,cow,gator,horse,dog,cat
    }
    return (
    <div className='img-container' onClick={changeBig}>
        <img src={svgMap[type]} className='animal'/>
        <img src={heart} className='heart' style={{width:10+10*size+'px'}}/>
    </div>
   
    )
}


export default Animal;
