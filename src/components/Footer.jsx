import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #1e293b;
  color: #94a3b8;
  padding: 1.5rem 2rem;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    &copy; {new Date().getFullYear()} Ali | All rights reserved.
  </FooterWrapper>
);

export default Footer;
