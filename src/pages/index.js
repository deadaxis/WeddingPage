import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import Background from '../images/main3.jpg';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Image from '../components/image'
import '../components/index.css'
import {Parallax, ParallaxLayer} from 'react-spring/addons'



const IndexPage = () => (
    <React.Fragment>
    <Parallax pages={3}>
    <ParallaxLayer offset={0.5} speed={1} style={{ backgroundColor: '#805E73' }} />
     <ParallaxLayer offset={1.5} speed={1} style={{ backgroundColor: '#87BCDE' }} />
    <ParallaxLayer offset={0} speed={0.5}>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <Image/>
                        </Col>
                        <Col>
                            <h1>DID THIS WORK?</h1>
                            <Button color="primary">BUTTON</Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
     </ParallaxLayer>
     <ParallaxLayer offset={1} speed={0.5}>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <Image/>
                        </Col>
                        <Col>
                            <h1>Another Layer</h1>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
     </ParallaxLayer>
     </Parallax>
     </React.Fragment>
   

)

export default IndexPage