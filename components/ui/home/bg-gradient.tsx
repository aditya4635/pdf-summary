"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% {
        filter: blur(0px);
    }
    50% {
        filter: blur(10px);
    }
    100% {
        filter: blur(0px);
    }
`;

const GradientBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(45deg, #ffffff, #39ff14);
    animation: ${pulse} 3s infinite;
    z-index: -1;
`;

const BgGradient: React.FC = () => {
    return <GradientBackground />;
};

export default BgGradient;