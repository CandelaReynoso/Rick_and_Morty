import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import linksStyles from './Links.module.css';


export default function Nav(props) {
   return (
    <div className={styles.nav}>
      <Link to ='/' className={linksStyles.logout}>LOGOUT</Link>
       <Link to="home"  className={linksStyles.links}>
        <span>Home</span>
       </Link> 
       <br/>
       <Link to="favorites"  className={linksStyles.links}>
        <span>Favorites</span>
       </Link> 
       <br/>
        <Link to="about"  className={linksStyles.links}>
          <span>About</span>
        </Link>
        <SearchBar onSearch={props.onSearch}/> 
      </div>
   );
}
