import React, {useState,useEffect, use} from "react";

function FetchDataComponent()
{
  let [data, setData]= useState([]);
  let [filterText, setFilterText]= useState('');
  let [sortData, setSortData] = useState(data);
  let url= 'https://jsonplaceholder.typicode.com/users';
   
  useEffect(()=>{
    fetch(url, {method:'GET', mode:'cors'})
    .then(response => response.json())
    .then(result => setData(result))
  },[])

  const filterData = data.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  function performSort()
  {
    sortData = data;
    setSortData(sortData.sort((a,b)=> a.name.localeCompare(b.name)));   
  }

  function handleDelete(item)
  {
    console.log(item);
  }

  return(
    <>   
         <h2>User List</h2>
     <ul>
        {data.map((item)=>(
         <li key={item.id}>{item.name}
          <button onClick={handleDelete}>Delete</button>
         </li>        
        ))}
    </ul>
       <h2>Filter Data</h2>
       <input type="text" placeholder="Search Name" value={filterText} onChange={(e)=>setFilterText(e.target.value)}></input>
       <ul>
       {filterData.map((item)=>(
        <li key={item.id}>{item.name}</li>
       )      
      )}
       </ul>
       <h2>Sort Data</h2>
       <button onClick={performSort}>Sort Data By Name</button>
       <ul>
        {sortData.map((item)=>(
          <li key={item.id}>{item.name}</li>
        ))}
       </ul>
    </>
  );
}
export default FetchDataComponent;