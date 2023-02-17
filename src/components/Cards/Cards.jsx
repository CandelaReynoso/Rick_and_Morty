import Card from '../Card/Card.jsx';
import React from 'react';
import styles from './Cards.module.css'


function Cards({characters, onClose}) { // characters es un array de objetos [{}]
   return (
   <div className={styles.Cards}>
    {
      characters.map((character) => {
         return (
         <Card
         name ={character.name}
         species={character.species}
         gender={character.gender}
         image={character.image}
         onClose={()=> onClose(character.id)}
         key ={character.id}
         id = {character.id}
         /> 
         )
      }

      )}
   </div>
   );
}
export default Cards;