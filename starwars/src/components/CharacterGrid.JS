import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "../components/Character";

export default function CharacterGrid(){

    const [characters, setCharacters] = useState([]);
    const [effect, setEffect] = useState("effect");

    useEffect(() =>{
    axios
        .get(`https://swapi.co/api/people`)
        .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results);
        })
        .catch(error => {
            console.log("Error in retrieving data: ", error);
        })
    }, [effect])

    return(
        <div>
            {characters.map(object =>{
             return <Character title={object.title}  />
            })}
        </div>
    );
}
