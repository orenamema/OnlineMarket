import axios from "axios";

export default {
    // retrieves products from server
    getProducts:function(query){
        return axios.get("/api/products", { params: { q: query } });
        // http://localhost:3002
    },
    // gets product with specific id
    getProduct: function(sku) {
        return axios.get(`/api/products/${sku}`);
      },
    // saves product
    saveProduct: function(product){
        return axios.post("/api/products", product)
    },
    // // retrieves saved products from database
    getCart: function(){
        return axios.get("/api/products")
    },
    // deletes specific product
    deleteProduct: function(id){
        return axios.delete("/api/products/" + id)
    }
};