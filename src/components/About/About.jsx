
import styles from './About.module.css'


export default function About(props){
    return(
        <div className={styles.descripcion}>
         <h1> Candela Reynoso</h1>
         <h2> FT COHORTE 35C</h2>
           <br/>
            <h3 className={styles.p}> En el marco del Modulo 2 del curso de Full Stack Developer 
            desarrollamos una pagina web interactiva utilizando React.</h3>
        </div>
    )
}

