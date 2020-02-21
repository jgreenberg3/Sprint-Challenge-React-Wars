import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "../components/Character";
import {Container, Row} from "reactstrap";
import "../components/StarWars.css";

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
        });
    }, [effect]);

    return(
        <div className="container">
            {characters.map(function(object, i){
                return(
                    <div key={i}>
                        <Character key={i} name={object.name} height={object.height} eye_color={object.eye_color} gender={object.gender} birth_year={object.birth_year}/>
                        {console.log("Successfully rendered!", object.name)}
                    </div>
                )
                }
            )}
        </div>
    )
};
