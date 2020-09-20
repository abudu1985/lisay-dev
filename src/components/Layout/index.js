import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';
import {Container, Row, Col} from 'react-grid-system';
import Footer from "../Footer";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
    return (
        <React.Fragment>
            <Container fluid style={{"marginTop":"15px"}}>
                <Row gutterWidth={16}>
                    <Col md={9}>
                        {props.children}
                    </Col>
                    <Col md={3}>
                        <Sidebar width={"100%"}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    )

};

export default Layout