import React, {useState, useEffect} from 'react'
import { Card } from '../../UI/Card';
import { Input } from '../../UI/Input';

export const Home = () => {
  const axios = require('axios');
  const url = 'https://rickandmortyapi.com/api/character/?name='
  const [datos, setDatos] = useState([])


    //Consumir API con Axios0
    function getResults(){
      const name = document.getElementById('input').value
      axios.get(url + name)
      .then(response => {
        setDatos(response.data.results)
      }).catch(e => {
        console.log(e);
      })
      }
  


  //consumir API con fetch
  
  // function fetchApi(name){
  //   fetch(url + name)
  //   .then(response => response.json())
  //   .then(json => setDatos(json.results)
  //   )
  // }


  function enter(e){

    if ( e.keyCode === 13) {
      getResults()
    }
    
  }

  useEffect(() => {
    getResults()
  },[]);

  return(
    <>
    <div id="search-container">
      <p id="search">Search</p>
      <Input type='text' id='input' event={enter} ></Input>
    </div>
    <div id='main-container'>
      {datos.map((index, key)=>{
        return (
          <div key={key}>
            <Card image={index.image} name={index.name} status={index.status} species={index.status} gender={index.gender}></Card>
          </div>
        )
      })}
    </div>
    </>
  )
}
