import React from "react";
import Axios from "axios";
import Item from "./Item";

class Search extends React.Component{
    state={
        records:[{}]
    }
    componentDidMount = () => {
        console.log("message")
        let data = []
        Axios.get("/api/products").then(function(records){
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
                
                <h1>Hello World</h1>
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