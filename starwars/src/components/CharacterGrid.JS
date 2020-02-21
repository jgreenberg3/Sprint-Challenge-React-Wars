import axios from "axios";

function CharacterGrid(){

    axios
        .get(`https://swapi.co/api/people`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log("Error in retrieving data: ", error);
        })



    return(

    )
}