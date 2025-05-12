import React from "react";
import styled from "styled-components";

const ProjectSection = styled.section`
  background: #0f172a;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: auto;
`;

const ProjectCard = styled.div`
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDesc = styled.p`
  font-size: 0.95rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectLink = styled.a`
  color: #60a5fa;
  text-decoration: underline;
  font-size: 1rem;

  &:hover {
    color: #2563eb;
  }
`;

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <Heading>Projects</Heading>
      <ProjectGrid>
        <ProjectCard>
          <ProjectTitle>Todo App</ProjectTitle>
          <ProjectDesc>
            A simple and interactive Todo app where users can manage their daily
            tasks. Built with React.
          </ProjectDesc>
          <div>
            <ProjectLink
              href="https://your-live-demo-link.com" // Replace with live demo link
              target="_blank"
            >
              Live Demo
            </ProjectLink>{" "}
            |{" "}
            <ProjectLink
              href="https://github.com/yourusername/todo-app" // Replace with your GitHub link
              target="_blank"
            >
              GitHub
            </ProjectLink>
          </div>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Quiz App</ProjectTitle>
          <ProjectDesc>
            A fun quiz app that tests users' knowledge on various topics. Built
            with React and includes timers and scoring.
          </ProjectDesc>
          <div>
            <ProjectLink
              href="https://your-live-demo-link.com" // Replace with live demo link
              target="_blank"
            >
              Live Demo
            </ProjectLink>{" "}
            |{" "}
            <ProjectLink
              href="https://github.com/yourusername/quiz-app" // Replace with your GitHub link
              target="_blank"
            >
              GitHub
            </ProjectLink>
          </div>
        </ProjectCard>
      </ProjectGrid>
    </ProjectSection>
  );
};

export default Projects;
