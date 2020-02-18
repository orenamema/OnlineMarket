import React, { Component } from 'react';
import { Col, Form, Button, Container, Row, Jumbotron, CardColumns } from 'react-bootstrap';
import Item from "../components/Items/index";
import API from "../utils/API";

class Search extends React.Component{
    state={
        records:[{}]
    }
    componentDidMount = () => {
        console.log("message")
        let data = []
        API.getProducts().then(function(records){
            console.log(records)
            for (let i=0; i<records.data.length;i++){
             let items = {
                 productid:records.data[i].productId,
                 itemname:records.data[i].name,
                 description:records.data[i].shortDescription,
                 price:records.data[i].salePrice,
                 image:records.data[i].image,
             } 
             data.push(items)             
            }
            // console.log(data)
          
        }).then(res =>{
        
        this.setState({
            records:data
        },() =>{
            console.log(this.state.records)
        })
    })
    }


    render(){
        return(
            <div>
                <Button variant="success" class="btn btn-light" href="/">HOME &rarr;</Button>
                <Button variant="success" class="btn btn-light" href="/cart">CART &rarr;</Button>                
                <br></br>
                <Col>
                <Form.Control placeholder="SEARCH ITEM" type="text"
                name="productSearch" value={this.state.productSearch} />
                </Col>
                <h1>Marketplace</h1>
                {this.state.records.map((data,index)=> (
                  <Item
                  img = {data.image}   
                  itemname = {data.itemname}
                  description = {data.description}
                  price = {data.price}
                  key={index}
                  productid = {data.productid}/>
                ))}
            </div>
        )
    }
}

export default Search;