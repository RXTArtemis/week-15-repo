import React, {Component} from 'react';
import { House } from './Components/House';
import {HousesList } from './Components/HousesList';
// import { House } from './Components/House';
import NewRoomForm from './Components/NewRoomForm';

class App extends Component{
  render(){
    return(
      <div>
        <HousesList />
        
      </div>
    )
  }
}


export default App;
