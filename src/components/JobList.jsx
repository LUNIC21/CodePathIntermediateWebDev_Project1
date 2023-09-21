import React from "react";

const Websites = (props) =>{
    return(
        <div className={props.type} >
            <img src={props.image} alt="image" width = "100" height = "100"/>
            <h3>{props.name}</h3>
            <a href={props.hyperlink}>Go to the Page</a>
        </div>
    )
}

export default Websites;