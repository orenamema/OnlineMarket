import React from "react";
import { Button } from 'react-bootstrap';


class Item extends React.Component{

    render(){
        return(
            <div>
                <img src= {this.props.img } height={200} width={200}>
                </img>
                <p>{this.props.itemname}</p>
                <p>{this.props.description}</p>
                <p>{this.props.price}</p>
                <Button variant="success" class="btn btn-light" href="/cart">ADD TO CART &rarr;</Button>
        
            </div>
        )
    }
}
export default Item