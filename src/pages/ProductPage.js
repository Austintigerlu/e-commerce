import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductPage({match}) {
    const params = useParams()
    console.log(params)
    const product = products.find((p)=>p.id == params.id)
    console.log(product)
  return (
    <div>
        <Link to='/' className='btn btn-primary my-3'>Go Back </Link>
        <Row>
            <Col md={6}>
                <Image src={product.img} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} numReviews={product.numReviews} color={"#f8e825"}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    In Stock
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn w-100" type="button">
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ProductPage