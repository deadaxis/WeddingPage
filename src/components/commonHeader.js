import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from './image'
import Background from '../images/main.jpg';
import styled from 'styled-components';


const ShadedBackground = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    min-height: 500px;
    padding:0;

`;