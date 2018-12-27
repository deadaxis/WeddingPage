import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledDiv = styled.div`

`
const StyledContainer = styled(Container)`
background: red;
`

const StyledRow = styled(Row)`
background: none;
`

const StyledColumn = styled(Col)`
display:flex;
align-items:center;
justify-content:center;
background: none
`

const Navbar = (props) => (

    <StyledContainer>
        <StyledRow>
            <StyledColumn >
                <Button color='link'>Home</Button>
            </StyledColumn>
            <StyledColumn>
                <Button color='link'>Event Details</Button>
            </StyledColumn>
            <StyledColumn>
                <Button color='link'>Credits</Button>
            </StyledColumn>
        </StyledRow>

    </StyledContainer>

)

export default Navbar