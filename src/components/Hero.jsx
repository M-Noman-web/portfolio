import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 100vh;
  background: #0f172a;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;

  /* Responsive Design */
  @media (max-width: 768px) {
    padding: 1.5rem;
    height: auto; /* Adjust the height for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 1rem;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border-radius: 10px;
  margin: 0 0.5rem;
  text-decoration: none;

  &:hover {
    background-color: #1e40af;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
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
