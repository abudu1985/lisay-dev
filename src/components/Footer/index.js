import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import './style.css';
import Facebook from '../../services/Facebook.png';
import Instagram from '../../services/Instagram.png';
import LinkedIn from '../../services/LinkedIn.png';


const Footer = () => {
    const data = new Date().getFullYear();
    return(
        <div className="footer">
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="footerContentCenter">
                            <p>Tasks</p>
                            <p>Books</p>
                            <p>Serials</p>
                            <p>Opinions</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="footerContentCenter">
                            <a href="https://www.facebook.com/LuchkoIhor" target="_blank">
                                <img className="footerSocials" src={Facebook} alt="" />
                            </a>
                            <a href="https://www.instagram.com/abudu1985/" target="_blank">
                                <img className="footerSocials" src={Instagram} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/igorluchko" target="_blank">
                                <img className="footerSocials" src={LinkedIn} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="footerContentCenter">
                            <p>&copy; {data} lisay-dev</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

};

export default Footer