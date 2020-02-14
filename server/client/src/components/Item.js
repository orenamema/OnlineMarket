import React from "react";


class Item extends React.Component{
    render(){
        return(
            <div>
                <h1>Hey There</h1>
                <img src= {this.props.img } height={200} width={200}>
                </img>
        <p>{this.props.itemname}</p>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
        <select name="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
            </div>
        )
    }
}
export default Item