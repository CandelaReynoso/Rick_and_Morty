
import { useState } from 'react';
import style from './SearchBar.module.css'


export default function SearchBar(props) {
   const [busqueda, setBusqueda]= useState("")
   function handleChange(event){
      setBusqueda(event.target.value)
   }

   return (
   <div>
        <input value={busqueda} onChange={handleChange} type='search'/>
        <button  className= {style.button} onClick={() => props.onSearch(busqueda)}>BUSCAR</button>
   </div>
   );
}

