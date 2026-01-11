"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: "sindh-research-and-technology-showcase-2023",
    title: "Sindh Research and Technology Showcase 2023 - Project Presentation Recognition",
    description: "Recognition for presenting a Final Year Design Project at the 2nd Sindh Research and Technology Showcase 2023, held at Expo Centre Karachi and organized by the Sindh Higher Education Commission. The presented project, “Development of Reinforced Plastic Composite Construction Blocks,” was developed in collaboration with industry and focused on designing and evaluating composite construction blocks using plastic resins reinforced with fiber materials. ",
    // tech: ["React", "Next.js", "LLMs", "LangChain", "LangGraph"],
    // liveUrl: "https://drive.google.com/file/d/11uv7suJCrWZyV9ODupy5CpZCxVRvzIbb/view?usp=sharing",
    image: "/projects/sindh-research.jpeg",
  },
  {
    id: "unilever-engineering-possibilities-program",
    title: "Unilever - Engineering Possibilities Program",
    description: "Certification representing structured engineering upskilling through Unilever’s Engineering Possibilities Program, designed to support women in engineering across Pakistan. The program provided technical exposure and guided mentorship across multiple engineering functions, including supply chain operations and optimization, research and development processes, robotics and industrial automation systems, and data analytics for engineering decision-making. The training emphasized practical understanding of large-scale manufacturing environments, cross-functional engineering workflows, and inclusive industry practices.",
    // tech: ["Relevance AI", "Neon Database", "Slack"],
    // liveUrl: "https://drive.google.com/file/d/11uv7suJCrWZyV9ODupy5CpZCxVRvzIbb/view?usp=sharing",
    // repoUrl: "https://app.relevanceai.com/marketplace/d7b62b/b0a27b06-d3d8-4354-a29c-ffadd11c5983/search?search=ask+db&listing=357899e5-1166-44a9-a0cf-664aedda7b50",
    image: "/projects/unilever-engineering.jpeg",
    // documentationUrl: "https://drive.google.com/file/d/1rf8mBjWKs51NYY-62mi3mtv0bpHv7Tus/view"
  },
  {
    id: "sofeproject-competition-certificate-neduet",
    title: "SOFE - Project Competition Certificate (NEDUET)",
    description: "Certificate recognizing the achievement of 1st position in the 1st Poster and Project Competition organized by the Society of Food Engineers (SOFE) at NED University of Engineering & Technology (NEDUET). The awarded Final Year Design Project, “Development of Reinforced Plastic Composite Blocks,” involved the design and analysis of reinforced polymer composite materials for construction applications, with emphasis on material formulation, mechanical performance evaluation, and comparative assessment against conventional building materials.",
    // tech: ["Next.js", "Express.js", "PostgreSQL"],
    // repoUrl: "https://github.com/YUMNAWARIS/insight-beam",
    image: "/projects/sofeproject.jpeg",
    // liveUrl: "https://drive.google.com/file/d/11ZQOPeAgK6h72WhEQ05IAINe0qLY8DNb/view?usp=sharing",
  },
];

export default function MOOCsCertsPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, position: "relative", overflow: "hidden",
      "&:before": { content: '""', position: "absolute", left: -140, top: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(156,39,176,0.18), transparent 70%)", filter: "blur(10px)" },
      "&:after": { content: '""', position: "absolute", right: -140, bottom: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(25,118,210,0.18), transparent 70%)", filter: "blur(10px)" }
    }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Certificates
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            Certificates I&apos;ve completed
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 6 }}>
              <ProjectCard project={p} />
              </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}