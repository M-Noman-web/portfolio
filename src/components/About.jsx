import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  background-color: #1e293b;
  color: #f1f5f9;
  padding: 4rem 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  max-width: 600px;
  margin: auto;
  font-size: 1.1rem;
  line-height: 1.8;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  a {
    color: #38bdf8;
    text-decoration: underline;

    &:hover {
      color: #0ea5e9;
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Heading>About Me</Heading>
      <Paragraph>
        I'm a passionate Front-End Developer with a love for creating sleek and
        user-friendly web interfaces. I specialize in React.js and enjoy
        building things that live on the web. I love bringing ideas to life — 
        from concept to production.{" "}
        <br />
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/muhammad-noman-aa9626365"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </Paragraph>
    </AboutSection>
  );
};

export default About;
