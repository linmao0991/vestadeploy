import React from "react";

<<<<<<< HEAD
function DeletePet(props) {
    return (
        <button className="deleteThisPet btn" onClick={props.clickFunc}>{props.children}</button>
=======
function DeletePet(props){
    return (
        <button className="deleteThisPet btn" onClick = {props.clickFunc}>Delete</button>
>>>>>>> 4891c9e633c356ffd51dba06af6d311b06610975
    )
}

export default DeletePet;