import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Image from '../components/image'
import Header from '../components/header'
import backgroundImg from '../images/background.png'
import {Parallax, ParallaxLayer} from 'react-spring/addons'
import { Keyframes, animated, config } from 'react-spring'
import Navbar from '../components/navbar'
import main from '../images/main.jpg'

const GridContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: safe center
align-items: center;

`

const FlexContainer = styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:center;
padding: 10px;
`

const BackgroundImg = styled(ParallaxLayer)`
background-image: url(${backgroundImg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: auto;
`

const ChildNavbar = styled(Navbar)`
order: 1;
flex-basis: 200px;
`

const StyledCol = styled(Col)`
display:flex;
flex-direction:column;
justify-content:center;

`


const Movingstuff = Keyframes.Spring(async next =>{
    while(true){
        await next({
            from: { opacity: 0, width: 50, height: 50, background: 'black' },
            opacity: 1,
            width: 80,
            height: 80,
            background: 'tomato',
        })
        await next({
            from: { left: '0%' },
            left: '70%',
            background: 'seagreen',
          })
         await next({
            from: { top: '0%' },
            top: '40%',
            background: 'plum',
            config: config.wobbly,
          }) 
          await next({
            from: { top: '40%' },
            top: '0%',
            background: 'seagreen',
          })
          await next({
            from: { left: '70%' },
            left: '0%',
            background: 'tomato',
          })
          await next({
            from: {  opacity: 1 },
            opacity: 0,
            background: 'black',
          })
    }
})

class IndexPage extends React.Component{

    constructor(props){
        super(props)
    }


    parallax = React.createRef();
    
    scroll = to => this.parallax.current.scrollTo(to);
    

    

    render(){
    return(
        <React.Fragment>    
        <Parallax pages={3} ref={this.parallax}>  
        <ChildNavbar onPress={this.scroll}/>
        <Header/>
        <ParallaxLayer offset={0.2} speed={.8} factor={.8} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={1.2} speed={.8} factor={.8}  style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={.5} factor={.5}>
        <div>
            <Jumbotron id="aboutUs" style={{background: 'rgba(204, 204, 204, 0)'}} >
            <Container>  
                <Row>
                    <Col class="col-12 col-md-6">
                             <img src={main} class="img-fluid rounded shadow border" style={{minWidth:275+'px'}}/>
                            
                    </Col>
                    <StyledCol class="col-12 col-md-6">
                            <h1>About Us</h1>
                            <p>Lalu and Megha had thought that they would be no more than a passing moment in each others lives. However, these two strangers fell for each other the first time they said hello. 
In the following days and months, Lalu and Megha continued to enjoy each others company and formed a bond that blossomed into true love.  </p>
</StyledCol>
        </Row>
        </Container>
                        </Jumbotron>
        </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
        <div>
            <Jumbotron id="eventDetails" style={{background: 'rgba(204, 204, 204, 0)'}}>
                <Container>
                    <Row>
                        <StyledCol>
                            <h1>Event Details</h1>
                            <p>All functions are held in Kerala, India over a span of a week. Engagment will be held on 27 July 2019 in Athirampuzha, followed by a reception. The wedding will be held on 04 August, 2019 at Kaduthuruthy, Valiapally. A reception will be held at the hall located by the church.</p>
                        </StyledCol>
                        <Col class="col-12 col-md-6" >
                             <img src={main} class="img-fluid rounded shadow border" style={{minWidth:275+'px'}}/>                           
                    </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
        </ParallaxLayer>
        </Parallax>  
        </React.Fragment>    
        )
    }

}

export default IndexPage

