import React from "react";
import Card from 'react-bootstrap/Card';

function Addcard(){
    return (
        <Card id="card" style={{ width: '18rem', margin: '20px'}}>
        <Card.Img variant="top" src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-55304-shop-iphone11-carrier-106455.jpg"/>
        <Card.Body className="text-center">
            <Card.Title><a href="#">Card Title</a> </Card.Title>
            <Card.Text>
                $$
        </Card.Text>
        <Card.Text>
            Description
        </Card.Text>
        </Card.Body>
    </Card>
)
}

export default Addcard;