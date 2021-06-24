import './Car.css';

function Car(props){
    return(
        <div className="Car"> 
            {props.children}
            <h3>Car name: <span>{props.name}</span></h3>
            <p>Year: {props.year}</p> 
            <input type="text" value={props.name} placeholder={"Car name"} onChange={props.onChangeName}/>
            <button onClick={props.onDelete}>Delete</button>
        </div>   
    )
}

export default Car