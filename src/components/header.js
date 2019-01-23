import React from 'react'
import styled from 'styled-components';
import WeddingLogo from '../components/WeddingLogo'
import {Container} from 'reactstrap';
import WeddingImg from '../images/Promising.png'



const ImageContainer = styled(Container)`
margin-bottom: 1.45rem;
height: 55%;
background-attachment: fixed;
display: flex;
align-items: center;
justify-content: center;
`



const Header = () => (
<div>

<ImageContainer>  
    <img src={WeddingImg} class="img-fluid" style={{minWidth:275+'px'}}/>
</ImageContainer>

</div>





)

export default Header;
