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
    background: linear-gradient(135deg, #18181b 0%, #23232a 100%);
    opacity: 0.9;
    z-index: -1;
`;

const BgGradient: React.FC = () => {
    return <GradientBackground />;
};

export default BgGradient;