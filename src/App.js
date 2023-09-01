import './App.css';
import Tours from './components/Tours';
import data from './data';
import { useState } from 'react';


function App() {

  const [tours,setTours] = useState(data);
  
  function removeHandler(id){
      const newTour = tours.filter((obj)=>obj.id !== id);
      setTours(newTour);
  }

  function refreshHandler(){
    setTours(data);
  }
  if(tours.length === 0){
    return (
         <div className='refresh'>
                 <h2>No tours left</h2>

                 <button onClick={refreshHandler} className='btn-white'>Refresh</button>
         </div>
    );
  }
  return (
    <div className="App">
          <Tours tours={tours} removeHandler = {removeHandler}></Tours>
    </div>
  );
}

export default App;
