import React from 'react';
import './App.css';
import Cardlist from './Cardlist'
import{robots} from'./robots'
import Searchbox from'./Searchbox'

const App=()=>{
  return (

    <div className="tc">
    <h1>ROBO FRIENDS</h1>
    <Searchbox/>
    
    <Cardlist robots={robots}/>
    
    
   </div>    
  
  );
}

export default App;
          