"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: "rutile-anatase-tio2",
    title: "Comparative Analysis of Rutile-Anatase TiO₂ - Pigment Systems in LLDPE",
    description: "Conducted a comparative technical evaluation of pure rutile titanium dioxide versus cost-optimized rutile–anatase pigment blends with calcium extenders in LLDPE formulations, assessing optical performance, dispersion behavior, and material efficiency. The study enabled identification of a balanced pigment system that achieved performance parity with 100% rutile formulations while reducing overall pigment cost, supporting material optimization and cost-saving objectives without compromising product quality",
    // tech: ["React", "Next.js", "LLMs", "LangChain", "LangGraph"],
    // liveUrl: "https://drive.google.com/file/d/11uv7suJCrWZyV9ODupy5CpZCxVRvzIbb/view?usp=sharing",
    image: "/projects/rutile-anatase-tio2.jpeg",
  },
  {
    id: "surf-excel",
    title: "Surf Excel - Portfolio Packaging Artwork Transition",
    description: "Executed a full portfolio packaging artwork transition for Surf Excel, managing artwork conversion across multiple SKUs and pack formats in line with defined brand architecture and sustainability requirements. The project involved development and release of updated packaging mechanicals, alignment of material specifications within the Bill of Materials, and technical coordination with multiple packaging converters to ensure print consistency, substrate compatibility, and uninterrupted production during roll-out.",
    // tech: ["Relevance AI", "Neon Database", "Slack"],
    // liveUrl: "https://drive.google.com/file/d/11uv7suJCrWZyV9ODupy5CpZCxVRvzIbb/view?usp=sharing",
    // repoUrl: "https://app.relevanceai.com/marketplace/d7b62b/b0a27b06-d3d8-4354-a29c-ffadd11c5983/search?search=ask+db&listing=357899e5-1166-44a9-a0cf-664aedda7b50",
    image: "/projects/surf-excel.jpeg",
    // documentationUrl: "https://drive.google.com/file/d/1rf8mBjWKs51NYY-62mi3mtv0bpHv7Tus/view"
  },
  {
    id: "surf-excel-white",
    title: "Surf Excel White - Metallized Flexible Packaging - Development",
    description: "Executed the end-to-end development of a metallized flexible packaging structure for the Surf Excel White SKU, covering material selection, laminate design, and process qualification. The work included factory-scale trials to validate runnability, seal integrity, barrier performance, and visual uniformity of the metallized layer under production conditions. Developed detailed packaging specifications and laminate build definitions to ensure consistent performance, regulatory compliance, and scalability, enabling a stable transition to mass production while maintaining both functional and aesthetic requirements.",
    // tech: ["Next.js", "Express.js", "PostgreSQL"],
    // repoUrl: "https://github.com/YUMNAWARIS/insight-beam",
    image: "/projects/surf-excel-white.jpeg",
    // liveUrl: "https://drive.google.com/file/d/11ZQOPeAgK6h72WhEQ05IAINe0qLY8DNb/view?usp=sharing",
  },
  {
    id: "flexographic-to-rotogravure-printing",
    title: "Flexographic to Rotogravure Printing Transition - Surf Excel Packaging",
    description: "Led the transition of Surf Excel flexible packaging from flexographic to rotogravure printing to achieve cost optimization and improved print consistency for high-volume SKUs. The project involved technical evaluation of ink laydown, color density, registration stability, and print repeatability, confirming rotogravure suitability for large-scale production. Worked closely with packaging suppliers on cylinder engraving parameters, ink formulation optimization, and press setting alignment, followed by factory trials and print quality validations to ensure shade accuracy, adhesion performance, and laminate compatibility. The transition resulted in reduced ink consumption, lower conversion.",
    // tech: ["Next.js", "Express.js", "PostgreSQL"],
    // repoUrl: "https://github.com/YUMNAWARIS/PersonalFinance",
    image: "/projects/flexographic-to-rotogravure-printing.jpeg",
  },
];

export default function ProjectsPage() {
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
            Projects
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            Personal Projects I&apos;ve worked on
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