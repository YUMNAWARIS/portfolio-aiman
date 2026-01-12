"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const softwareSkills = [
  { title: "SAP (GMMD)", image: "/software-skills/sap.jpg" },
  { title: "Active Workspace", image: "/software-skills/teamcenter.png" },
  { title: "BLUE", image: "/software-skills/blue.png" },
  { title: "SAP (PLM)", image: "/software-skills/sap-plm.png" },
] as const;

export default function SoftwareSkills() {
  return (
    <Box
      id="software-skills"
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
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Software Skills
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            Key tools I work with
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {softwareSkills.map((skill) => (
            <Grid key={skill.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  height: "100%",
                  borderRadius: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  transition: "transform .2s ease, box-shadow .2s ease",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    position: "relative",
                    borderRadius: 1.5,
                    overflow: "hidden",
                    backgroundColor: "background.default",
                  }}
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 280px"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, textAlign: "center" }}>
                  {skill.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


