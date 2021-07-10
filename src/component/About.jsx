import React from 'react';
import { Link } from 'react-router-dom'

import NavbarPage from './page/NavbarPage'
import { Container, Jumbotron} from 'react-bootstrap'

function About() {
    return (
        <>
            <NavbarPage />
            <Container>
                <Jumbotron className="mt-3">
                    <h1>This is a Landing page for Khalid Ibrahim</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, ab?
                    </p>
                    <p>
                        <Link to="/">
                            <button className="btn btn-danger">Back</button>
                        </Link>
                    </p>
                </Jumbotron>
            </Container>
        </>
    )
}
export default About;