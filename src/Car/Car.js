import './Car.css';
import { FaFolder, FaBeer  } from 'react-icons/fa';

function Car(props){
    return(
        <div className="Car"> 
            {props.children}
            <h3>Car name: <span>{props.name}<FaFolder /></span></h3>
            <p>Year: {props.year}<FaBeer /></p> 
            <input type="text" value={props.name} placeholder={"Car name"} onChange={props.onChangeName}/>
            <button onClick={props.onDelete}>Delete</button>
            <div className={"btn-close"}><span class="material-icons-outlined">
clear
</span></div>
        </div>   
    )
}

export default Car