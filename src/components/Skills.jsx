import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  background: #1e293b;
  color: #f1f5f9;
  padding: 4rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillBadge = styled.span`
  background: #334155;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background-color: #475569;
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem 1.75rem;
  }
`;

const Skills = () => (
  <SkillsSection id="skills">
    <Heading>Skills</Heading>
    <SkillsGrid>
      <SkillBadge>HTML</SkillBadge>
      <SkillBadge>CSS</SkillBadge>
      <SkillBadge>JavaScript</SkillBadge>
      <SkillBadge>React</SkillBadge>
      <SkillBadge>Tailwind CSS</SkillBadge>
      <SkillBadge>Git</SkillBadge>
    </SkillsGrid>
  </SkillsSection>
);

export default Skills;
