import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border-radius: 10px;
  margin: 0.5rem;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Title>Hi, I'm Noman 👋</Title>
      <SubTitle>Front-End Developer | React Enthusiast</SubTitle>
      <div>
        <Button href="#projects">Projects</Button>
        <Button href="#contact">Contact</Button>
      </div>
    </HeroSection>
  );
};

export default Hero;
