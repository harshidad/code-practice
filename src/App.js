
import './App.css';
import './FetchData';
import React, {useState, useEffect} from 'react';
import FetchDataComponent from './FetchData';
function App() {
     return(
    <FetchDataComponent></FetchDataComponent>);
  //   let [data,setData]= useState([]);

  //   useEffect ( () =>
  //   {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(res => setData(res));
  //   },[])

  // return (
  //   <div className="App">
  //     <h2>User List</h2>
  //     <ul>
  //       {/* {data.map((item) => (
  //         <li key={item.id}>{item.name}</li>
  //       ))} */}
  //     {data.map((item)=>(
  //       <li key={item.id}>{item.name}</li>
  //     ))}
  //     </ul>
  //   </div>
  // );
}

export default App;
