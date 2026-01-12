"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProjectCard, { Project } from "@/components/ProjectCard";

const selectedWork: Project[] = [
  {
    id: "polymer-composite-blocks",
    title: "Development of Reinforced Polymer Composite Construction Blocks (FYDP)",
    description:
      "Designed and developed lightweight, high-strength polymer composite building blocks using HDPE/PP blends, engineered to provide improved thermal insulation, moisture resistance, and durability. The blocks were designed with an interlocking, LEGO-inspired geometry, eliminating the need for adhesives or mortar during construction. This sustainable alternative to conventional materials such as concrete, wood, and clay bricks achieved a high strength-to-weight ratio, reduced material usage, and enhanced construction efficiency while supporting cost-effective and portable building solutions.",
    image: "/selected-work/selectedWork1.png",
  },
  {
    id: "liquid-pouches",
    title: "Liquid Pouches Development – Vim & Surf Excel",
    description:
      "Led end-to-end development of liquid pouch and sachet SKUs for Vim and Surf Excel, including structure design using metallized PET-based laminates for improved barrier performance and shelf stability. Worked on small-SKU sachet development, covering material selection, seal integrity, and machinability under high-speed filling conditions. Managed artwork proofing, supplier coordination, and production trials to ensure technical, quality, and commercial readiness, delivering launches on time in line with category growth targets.",
    image: "/selected-work/selectedWork2.png",
  },
  {
    id: "surf-excel-sustainability",
    title: "Surf Excel – Multilayer Packaging Sustainability Project",
    description:
      "Contributed to the development of a sustainable multilayer flexible packaging structure for Surf Excel by replacing the conventional PE/PET laminate with a PE/BOPP-based structure. The transition leveraged mono-olefin compatibility to enhance recyclability within existing polyolefin recycling streams while maintaining functional performance. Technical evaluation focused on barrier properties, mechanical strength, seal integrity, and processability, with BOPP enabling improved stiffness and barrier performance at optimized thickness. The redesigned structure delivered a reduced carbon footprint alongside material cost optimization, supporting both sustainability and performance objectives in high-volume FMCG packaging.",
    image: "/selected-work/selectedWork3.jpg",
  },
  {
    id: "sachet-weight-calculator",
    title: "Sachet Weight Calculator – Web-Based Tool",
    description:
      "Developed a web-based calculator using Python, JavaScript, HTML, and CSS to estimate sachet material weight based on PET/PE layer thickness, material density, and package dimensions. Integrated packaging science formulas to automate accurate weight calculations, supporting development efficiency and cost-saving analyses. The project enhanced practical understanding of density-to-weight relationships in flexible packaging and demonstrated the application of coding tools for engineering problem-solving.",
    image: "/selected-work/selectedWork4.png",
  },
];

export default function SelectedWork() {
  return (
    <Box
      id="selected-work"
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          left: -140,
          top: -120,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(closest-side, rgba(156,39,176,0.18), transparent 70%)",
          filter: "blur(10px)",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          right: -140,
          bottom: -120,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(closest-side, rgba(25,118,210,0.18), transparent 70%)",
          filter: "blur(10px)",
        },
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Selected Work
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            Highlights across packaging, materials, and tooling
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {selectedWork.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 6 }}>
              <ProjectCard project={item} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button component="a" href="/projects" variant="contained">
            ALL Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

