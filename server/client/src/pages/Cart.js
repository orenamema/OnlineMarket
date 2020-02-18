import React, { Component } from 'react';
import { Container, Table, Button, Row, Col, Card, CardColumns } from 'react-bootstrap';
import API from '../utils/API';

class Cart extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        API.getCart()
            .then(res => {
                console.log("cart")
                console.log(res)
                this.setState({ products: res.data})})
            .catch(err => console.log(err))
    };


    render() {
        return (
            <div>
                <Button variant="success" class="btn btn-light" href="/">HOME &rarr;</Button>
                <Button variant="success" class="btn btn-light" href="/cart">CART &rarr;</Button>
                <br></br>
                <Container>
                    <h1 className="text-center">Your shopping cart</h1>
                    <br></br>
                    <h4>Click on an item in your cart to view in detail</h4>
                    <Table responsive>
                    </Table>
                    {!this.state.products.length ? (
                            <h1>No products to display</h1>
                        ) : (<Container>
                            <CardColumns>
                                {this.state.products.map(data => {
                                    return (
                                        <Card key={data.name} >
                                            <Card.Img variant="top" src={data.image} style={{ width: "45%" }} className="ml-5 pl-5 pt-5" />
                                            <Card.Body className="text-center">
                                                <Card.Title>{data.name}</Card.Title>
                                                <Card.Text>
                                                    <strong>Fulfilled By:</strong> {data.fulfilledBy}
                                                </Card.Text>
                                                <Card.Text>
                                                    <strong>Desc.:</strong>
                                                    {data.longDescription}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    );
                                })}
                            </CardColumns>
                        </Container>
                            )}

                </Container>

            </div>


        )
    }

};


export default Cart;
