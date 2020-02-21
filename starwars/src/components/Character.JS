import React from "react";
import {Card, CardTitle, Row, Col, CardBody, CardSubtitle, CardText} from "reactstrap";
import style from "../components/StarWars.css";
import styled from "styled-components";

const CharacterCard = styled.div`
    background: white;
    color: black;
    width: 30%; 
    max-height: 400px; 
    border: 0.5px dotted lightblue;
    margin: 1%;
`;

const CharacterTitle = styled.div`
    font-size: 3.2rem;
`;

const CharacterSubTitle = styled.div`
    font-size: 2.6rem;
`;

const Character = props => {
        return(
               <CharacterCard>
                   <CharacterTitle>{props.name}</CharacterTitle>
                        <CharacterSubTitle>{props.gender}</CharacterSubTitle>
                        <CardSubtitle>Height: {props.height}</CardSubtitle>
                        <CardText>Eye Color: {props.eye_color}</CardText>
                        <CardText>Birth Year: {props.birth_year}</CardText>    
               </CharacterCard>
            );    
}

export default Character;