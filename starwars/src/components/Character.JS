import React from "react";
import {Card, CardTitle, Row, Col, CardBody, CardSubtitle, CardText} from "reactstrap";
import style from "../components/StarWars.css";

const Character = props => {
        return(
                <div>
                    <Row>
                        <Card>
                            <CardBody>    
                                <CardTitle>Name: {props.name}</CardTitle>
                                <CardSubtitle>Gender: {props.gender}</CardSubtitle>
                                 <CardSubtitle>Height: {props.height}</CardSubtitle>
                                <CardText>Eye Color: {props.eye_color}</CardText>
                                <CardText>Birth Year: {props.birth_year}</CardText>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            );    
}

export default Character;