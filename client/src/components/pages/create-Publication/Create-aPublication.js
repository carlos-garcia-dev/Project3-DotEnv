import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import PublicationService from '../../../service/publication.service'

class NewPublication extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            subTitle: '',
            bodyText: '',
            imageUrl: '',
            tag: '',
            author: this.props.signnedUser ? this.props.signnedUser._id : '',
            commentaries: ''
        }
        this.serviceAuth = new AuthService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.serviceAuth
            .signIn(this.state)
            .then(signnedUser => {
                this.props.storedUser(signnedUser.data)
                this.props.history.push('/')        // redirección JS ?
            })
            .catch(err => console.log({ err }))
    }


    render() {

        return (

            <Container>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                        <br></br>
                        <br></br>
                      
                      
                        <h2>Sign Up</h2>

                        <br></br>
           

                        <Form onSubmit={this.handleSubmit}>
                            
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder='Name' value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" placeholder='Username' value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                   
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" placeholder='Email' value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder='Password' value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            

                            <Button variant="dark" type="submit">Sign up</Button>
                            {console.log(this.state)}
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewPublication