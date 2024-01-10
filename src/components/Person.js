import React from "react";
import Icon from "../images/profile.png"
import Star from "../images/image.png"

const Person =()=>{
    
    return(
        <div style={{display:"flex",alignItems:"center", margin:"10px"}}>
            <img alt="icon" src={Icon}></img>
            <div className="PersonName">@einkaufsmoeglichkeiten</div>
            <div className="Raiting"> 5</div>
            <img alt="starIcon" src={Star}></img>
            <button className="ButtonModal" style={{marginLeft:"50px",width:"150px"}} >Выбрать</button>
        </div>
    )
}

export default Person;