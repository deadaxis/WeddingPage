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

const BackgroundImg = styled(ParallaxLayer)`
background-image: url(${backgroundImg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: auto;
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

export default class IndexPage extends React.Component{

    constructor(props){
        super(props)
    }

    parallax = React.createRef();
    scroll = to => this.parallax.current.scrollTo(to);
    
    render(){
    return(
    <React.Fragment>

    <Parallax pages={2.5} ref={this.parallax}>  
    <BackgroundImg offset={0} speed={0} factor={3}/>
    <ParallaxLayer offset={0.75} speed={1.5} style={{ backgroundColor: '#805E73', opacity: .9 }} />
    <ParallaxLayer offset={1.75} speed={1.5} style={{ backgroundColor: '#87BCDE', opacity: .9 }} />
    <ParallaxLayer offset={0} speed={1}>
    <Header/>

       
        <div class="col-lg-8 col-md-6 col-sm-6 col-xs-3 offset-2 mb-5 float-md-center">
            <Jumbotron style={{background: 'rgba(204, 204, 204, 0.8)'}}>
                <Container>
                    <Row>
                        <Col>
                            <Image/>
                        </Col>
                        <Col>
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet, oratio timeam discere ad vel, dicam feugiat interpretaris pro eu. Iisque praesent splendide ei pro, dolor omittam ut est, vel scripta nonumes percipitur an. Ne sint commodo prodesset mei. Id zril scripta erroribus mel. Sit et doctus deserunt.

Vis quas platonem dignissim eu, ea eam amet ponderum deterruisset. In vide viderer intellegam eos. Sed an dolor numquam instructior, maiorum omnesque ponderum sit ea. Vis autem alienum te, his zril audire delicata et. Voluptua efficiantur ut duo, eos ut congue definiebas.

His simul tollit in, qui nihil praesent id. Phaedrum iudicabit interpretaris nam et. An habeo graeci nam, mei id graeco molestie. Fabellas insolens scribentur vis cu, ea prima mazim qui. Ne erant salutatus qui. Esse rebum fuisset eos ex, deleniti persecuti reformidans ad pri.

Dicam consul repudiare te vim, mel quod vero tacimates ei. Vel omnes tritani eloquentiam cu. Verear quaeque has no, nam ex prima reprimique. Cu vivendo hendrerit mediocritatem has, pri quando sanctus dolorem eu. Mucius labores molestie an nam. Mea hinc adipiscing cu. Simul tantas prodesset ei quo, no sed laoreet cotidieque efficiantur.

Ad justo discere abhorreant duo, pro erant labores ut. Per hinc ludus scribentur eu, impetus sapientem interpretaris per id, in has ignota omnium verear. An vis modo mollis complectitur, liber aeque id vis, at vel alii assueverit. Harum interesset eam te. Nisl mazim scaevola cu per, semper reprimique ullamcorper qui te. No eam vide luptatum.</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
     </ParallaxLayer>

     <ParallaxLayer offset={1.5} speed={1}>
        <div class="col-lg-8 col-md-6 col-sm-6 col-xs-3 offset-2 float-md-center">
            <Jumbotron style={{background: 'rgba(204, 204, 204, 0.8)'}}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Event Details</h1>
                            <p>Lorem ipsum dolor sit amet, oratio timeam discere ad vel, dicam feugiat interpretaris pro eu. Iisque praesent splendide ei pro, dolor omittam ut est, vel scripta nonumes percipitur an. Ne sint commodo prodesset mei. Id zril scripta erroribus mel. Sit et doctus deserunt.

Vis quas platonem dignissim eu, ea eam amet ponderum deterruisset. In vide viderer intellegam eos. Sed an dolor numquam instructior, maiorum omnesque ponderum sit ea. Vis autem alienum te, his zril audire delicata et. Voluptua efficiantur ut duo, eos ut congue definiebas.

His simul tollit in, qui nihil praesent id. Phaedrum iudicabit interpretaris nam et. An habeo graeci nam, mei id graeco molestie. Fabellas insolens scribentur vis cu, ea prima mazim qui. Ne erant salutatus qui. Esse rebum fuisset eos ex, deleniti persecuti reformidans ad pri.

Dicam consul repudiare te vim, mel quod vero tacimates ei. Vel omnes tritani eloquentiam cu. Verear quaeque has no, nam ex prima reprimique. Cu vivendo hendrerit mediocritatem has, pri quando sanctus dolorem eu. Mucius labores molestie an nam. Mea hinc adipiscing cu. Simul tantas prodesset ei quo, no sed laoreet cotidieque efficiantur.

Ad justo discere abhorreant duo, pro erant labores ut. Per hinc ludus scribentur eu, impetus sapientem interpretaris per id, in has ignota omnium verear. An vis modo mollis complectitur, liber aeque id vis, at vel alii assueverit. Harum interesset eam te. Nisl mazim scaevola cu per, semper reprimique ullamcorper qui te. No eam vide luptatum.</p>
                        </Col>
                        <Col>
                            <Image/>
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

