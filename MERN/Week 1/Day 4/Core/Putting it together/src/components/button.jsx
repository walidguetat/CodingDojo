import React from "react";

const BirthdayButton = (props) =>{
    return(
        <div className="Ri">
            <button onClick={()=>alert("hello")}>Birthday button for {props.firstName} {props.lastName}</button>
        </div>

    )
}

export default BirthdayButton;