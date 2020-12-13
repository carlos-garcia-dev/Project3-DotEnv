import React, { Component } from 'react'
import PublicationService from '../../../service/publication.service'
import Container from 'react-bootstrap/Container'


// import Loader from '../../shared/loader/Loader'

// import PublicationListCard from '../publicationList-Card/PublicationListCard'


class UserSavedPublications extends Component {
   
    constructor() {
        super()
        this.state = { publications: [] }
        this.servicePublication = new PublicationService()
    }

    componentDidMount = () => this.reloadPublications()

    reloadPublications = () => {
        this.servicePublication
            .getPublications()
            .then(res => this.setState({ publications: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <br></br>    
                <br></br>    
            
                <h1>Saved Publications</h1>
            </Container>
        ) 
    }
}

export default UserSavedPublications