import styles from './Detail.module.css'
import{useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState} from 'react';




export default function Detail (props){
    const[infoDetail, setInfo] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();


    function backToHome() { 
        navigate("/home");
    }
     

    // se eejecuta en el montaje y cuando cambie el ID.
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setInfo(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });

  return ()=> setInfo({})
    }, [id]);

    return (
    <div className={styles.detail}>
        <div>
            <button className= {styles.button} onClick={backToHome}>
                VOLVER
            </button>
        </div>
        {infoDetail.id ?  ( 
        <div>
            <h1>{infoDetail.name}</h1>
            <h5>{infoDetail.status}</h5>
            <h5>{infoDetail.species}</h5>
            <h5>{infoDetail.gender}</h5>
            <h5>{infoDetail.origin.name}</h5>
            <div>
             <img src={infoDetail.image} alt={infoDetail.name}/>
            </div>
            </div>
        ) : ( 
            <h1>Loading...</h1>  
            )} 
    </div>  
  );         
}
