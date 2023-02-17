import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Card.module.css';
import style from './img.module.css'
import{useState} from 'react';
import {addFavorite, deleteFavorite } from '../../redux/actions';
import { useEffect } from 'react';



export default function Card({name, gender, species, image, onClose,id}) {
 const [isFav, setIsFav] = useState(false);
 const dispatch = useDispatch();
 const myFavorites = useSelector(state => state.myFavorites);
 


 const handleFavorite = () => {
   if(isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id))
   }
   else {
      setIsFav(true);
      dispatch(addFavorite({name, gender, species, image, onClose,id}))
   }
 }


 useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);





 
 return (
      <div>        
        <div className={styles.Card}>
           <div className={styles.corazon} >
         {
           isFav ? (
             <button onClick={handleFavorite}>❤️</button>
        ) : (
             <button  onClick={handleFavorite}>🤍</button>
         )
        }
           </div>
            <button className={styles.buttonX} onClick={onClose}>X</button> 
            <br/>
            <br/>
             <img className={style.img} src={image} alt={name} />
             <div>
               <Link  to={`/detail/${id}`} className={styles.Card}>
                   <h2>{name}</h2>
               </Link>
            </div> 
            <h2 className={styles.text}>Especie: {species}</h2>
            <h2 className={styles.text}>Genero:{gender}</h2>        
      </div>
      </div>
   );
}
