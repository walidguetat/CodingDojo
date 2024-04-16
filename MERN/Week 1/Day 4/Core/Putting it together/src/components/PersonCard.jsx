import React, { useState } from "react";
import BirthdayButton from "./button";
const PersonCard = (props) =>{

    const [age, setAge] = useState(0);
    const cllick = () => {
        setAge(age+1) 
    }                                   
    
    

    return(
        <div className="Ri">
            <h1>
                {props.firstName} , {props.lastName} 
            </h1>
            <p>
                Age : {props.age+age}
            </p>
            <p>
                Hair color : {props.hairColor}
            </p>
            <button onClick={()=>cllick()}>Birthday Button for {props.firstName} {props.lastName}</button>
            {/* <BirthdayButton/> */}
        </div>

    )
}

export default PersonCard;