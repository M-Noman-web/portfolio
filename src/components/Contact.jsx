import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  background: #0f172a;
  color: #fff;
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

const Email = styled.a`
  font-size: 1.25rem;
  color: #60a5fa;
  text-decoration: underline;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Contact = () => (
  <ContactSection id="contact">
    <Heading>Contact Me</Heading>
    <p>You can reach me via email:</p>
    <Email href="mailto:uk480208@gmail.com">uk480208@gmail.com</Email>
  </ContactSection>
);

export default Contact;
