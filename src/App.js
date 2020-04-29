import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/Header.js';
import Alerts from '../src/components/Alerts/Alerts.js';
import Score from '../src/components/Score/Score.js';
import Main from '../src/components/Main/Main.js';
import Footer from '../src/components/Footer/Footer.js';
import Card from '../src/components/Card/Card.js';
import cards from './assets/json/cards.json';

class App extends Component {
state= {
  cards,
  topScore: 0,
  selected: [],
  shake: "",
  message1: "Click on an image to begin!",
  message2: "",
  alertType: "info",
  topScoreType: "info"
  }

  shuffle = id => {
    this.setState({
      cards:this.state.cards.sort(function(a,b){
        return 0.5 - Math.random();
      })
    })
  }
incrementClick = id=> {
  let ids = this.state.selected
  const incorrect = ids.includes(id);
  if(!incorrect){
    this.state.selected.push(id);
    let newScore= this.state.score +1;
    this.setState({score:newScore});
    if(newScore === 12){
      this.setState({
        score: 0,
        selected: [],
        topScore: newScore,
        message1: "Winner chicken dinner!",
        message2: "",
        alertType: "success",
      });
    }  
  
  else if (newScore > this.state.topScore){
    this.setState({
      topScore:newScore,
      message1: "Correct!",
      message2: "You guessed correctly!",
      alertType: "success",
      topScoreType: "success"
    });
  } 
    else{
      this.setState({
        message1: "Correct!",
        message2: "You guessed correctly!",
        alertType: "success",
        topScoreType: "info"
      });
    }
  }
else {
  this.setState({
    score: 0,
    selected: [],
    shake: "incorrect",
    message1: "Incorrect!",
    message2: "You guessed incorrectly!",
    alertType: "danger",
    topScoreType: "info"
  });
setTimeout(function(){ 
  this.setState({ shake: "" }); 
}.bind(this), 1000);
  
  }
};

render(){
  return(
  <div className="app">
    <Header />
    <Alerts
     message1={this.state.message1}
     message2={this.state.message2}
     alertType={this.state.alertType}
 />
  <Score 
    shake={this.state.shake}
    score={this.state.score} 
    topScore={this.state.topScore}
    alertType={this.state.alertType}
    topScoreType={this.state.topScoreType}
    />
    <Main
    shake={this.state.shake}
    >
      {this.state.cards.map((cards, i) => (
        <Card
        id={cards.id}
        name={cards.name}
        image={cards.image}
        key={i}
        increment={this.incrementClick} shuffle={this.shuffle}
        />
      ))}
    </Main>
    <Footer/>
    </div>

  );
};
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
