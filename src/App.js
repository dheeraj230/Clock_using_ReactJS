import React,{useState} from 'react'

import './App.css'


function App() {

  let time =new Date().toLocaleTimeString();

  const [curtime, setCurtime] = useState(time);

  const [color, setcolor] = useState("white");

  setInterval(() => {

    let date =new Date();
    let curentTime=date.toLocaleTimeString();

    setCurtime(curentTime);

    var second=date.getSeconds();
    if(second%2==0){
      setcolor("black")
    }else{
      setcolor("white")
    }

  }, 1000);

  return (
    <div style={{background:color}}>
      <h1>Dheeraj</h1>
      <h1>{time}</h1>
    </div>
  )
}

export default App

