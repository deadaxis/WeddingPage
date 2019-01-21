import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledDiv = styled.div`

`
const StyledContainer = styled(Container)`
background: none;
`

const StyledRow = styled(Row)`
background: none;
padding-top: 10px;
`

const StyledColumn = styled(Col)`
display:flex;
align-items:center;
justify-content:center;
background: none
`

const StyleButton = styled(Button)`
font-size:16px;
color:#d4af34;
border-color:#d4af34;
&:hover{
    background:#d4af34;
    border-color:white;
    color:white;
}
&:focus{
    background: #d4af34;   
    color:white; 
    outline:none !important;
    box-shadow:none !important;
}
`

const StyledAnchor = styled.a`
text-decoration: none !important;
color:inherit;
&:visited{
    text-decoration: none !important;
    color:inherit;}
  
`

const Navbar = (props) => (

    <StyledContainer>
        <StyledRow>
            <StyledColumn >
                <StyleButton outline color='warning'><StyledAnchor href="#aboutUs">Home</StyledAnchor></StyleButton>
            </StyledColumn>
            <StyledColumn>
                <StyleButton outline color='warning'><StyledAnchor href="#eventDetails">Event Details</StyledAnchor></StyleButton>
            </StyledColumn>
            <StyledColumn>
                <StyleButton outline color='warning'>Credits</StyleButton>
            </StyledColumn>
        </StyledRow>

    </StyledContainer>

)

export default Navbar