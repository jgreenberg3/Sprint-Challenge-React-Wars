import React from "react";
import {Card, CardTitle} from "reactstrap";

const Character = props => {
        return(
            <div>
                <Card>
                    <CardTitle>{props.title}</CardTitle>
                </Card>>
            </div>
        );    
}

export default Character;