import React from "react";
import Axios from "axios";
class Search extends React.Component{
    state={

    }
    componentDidMount = () => {
        console.log("message")
        Axios.get("/api/products").then(function(records){
            console.log(records)
        })
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default Search;