import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component{
  render(){
    return(
      <h2>it is {new Date().toLocaleTimeString()} </h2>
    )
  }
}

class Hello extends React.Component{
  render(){
    return(
      <h1>سلام دوستان من </h1>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <>
        <Hello/>
        <Timer/>
      </>
    )
  }
}

const tick = () =>{
  ReactDOM.render(<App />, document.getElementById("root"))
}

setInterval(tick, 1000)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
  
//     <App />
 
  
// );


