import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Logo extends Component{
  render(){ 
    return (
    <header className="App-header">
      <img src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png" className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to CYF Hotel </h1>
    </header>
    )
  }
}
 class BookingsMessage extends Component{
   render(){
     return (
      <p className="App-intro">
      There are bookings available for today's date {new Date().toLocaleDateString()}
      </p>
     )
   }
 }

 class SpecialDeals extends Component{
   render(){
    const offers =["Book 2 rooms and get 50% of on the second room",
    "Book a room and children go free"
] 
    const Listofoffers = () => (
      <div>
        {offers.map((offer)=> (
          <p> {offer} </p>
        ))}
    </div> )

     return (
       <div>
        <Listofoffers/>
     </div>
     )
   }
 }

class App extends Component {
  render() {
    
    return (
      <div className="App">
       
       
       
      <div>
        <Logo />
        <BookingsMessage />
        <SpecialDeals/>
      </div>
  
        
       
      </div>
    );
  }
}

export default App;
