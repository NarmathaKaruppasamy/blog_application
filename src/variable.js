import './App.css';
import React from 'react';


function variable(){
  const title="Welcome";
  const details=[{
    name:'Narmatha.K',
    age:21,
    place:'Attur'
  }]
  const fav=['jumbo','hockey','ball']
      return (
        
        <div className='App'>
          <div className='content'>
            <h1>{title}</h1>
            <h2>Bio-Data</h2>
            <p>{details.map(info=>(
              <div>
              <h3>Name : {info.name}</h3>
              <h3>Age : {info.age}</h3>
              <h3>Place : {info.place}</h3>
              </div>
            ))}
            </p>
            <h2>Adored Items</h2>
            <p>
              {fav.map(likes=>(
                <h3>*{likes}</h3> 
              ))}
            </p>
          </div>
        </div>
      );
}

export default App;
