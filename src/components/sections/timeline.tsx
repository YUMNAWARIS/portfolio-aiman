"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import LabTimeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot, { TimelineDotProps, TimelineDotPropsColorOverrides } from "@mui/lab/TimelineDot";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";

export default function Timeline() {
  const items: Array<{
    type: "work" | "education";
    date: string;
    title: string;
    subtitle?: string;
    details?: string[];
  }> = [
    {
      type: "work",
      date: "May 2024 – November 2025",
      title: "Junior Manager - Unilever",
      details: [
        "Lead packaging R&D across Surf Excel, Vim, Domex, Sunlight, and Comfort spanning flexible, rigid, and corrugated formats.",
        "Drive sustainability, innovation, and cost optimization through material trials, supplier development, and value engineering.",
        "Manage end-to-end artwork and SKU development to ensure regulatory compliance, accurate specs, and on-time launches.",
        "Safeguard continuous packaging availability for base business and promotions while localizing materials to global standards.",
        "Partner with regional R&D, supply chain, procurement, and marketing to deliver innovation pipelines and savings targets.",
      ],
    },
    {
      type: "work",
      date: "January 2024  - April 2024",
      title: "Management Trainee Officer - FAV Group of Companies",
      details: [
        "Worked in the R&D department of the Masterbatch division, supporting development of premium masterbatches for food packaging, fire retardant applications, colorants, and barrier enhancement solutions based on customer specifications.",
        "Gained hands-on experience with thermoplastics, rigid and specialty plastics, and polymer additive systems.",
        "Actively involved in cross-functional projects focused on improving product performance and quality.",
        "Performed material characterization and quality testing including Melt Flow Index (MFI), tensile testing, and moisture content analysis to support formulation optimization and production readiness.",
      ],
    },
    {
      type: "work",
      date: "September 2022  - October 2022",
      title: "Production Internee - LOTTEE Chemicals Pakistan LTD",
      details: [
        "Gained hands-on exposure to large-scale polymer and chemical manufacturing operations, with a focus on production processes, R&D support, and process optimization.",
        "Worked closely with production and technical teams to understand end-to-end chemical processing, operational controls, and quality parameters.",
        "Reviewed and analyzed plant performance data and operational reports to assess process efficiency, system stability, and production trends.",
        "Developed a foundational understanding of industrial chemical processes, equipment functionality, and data-driven decision-making within a petrochemical manufacturing environment.",
      ],
    },
    {
      type: "education",
      date: "2019 – 2023",
      title: "Bachelor of Engineering – Polymer and Petrochemical Engineering",
      subtitle: "NED University of Engineering and Technology, Karachi, Pakistan",
      details: ["Final Grade: 3.31"],
    },
    {
      type: "education",
      date: "2018",
      title: "Intermediate – Pre-Engineering",
      subtitle: "B.A.M.M P.E.C.H.S Govt. Girls College, Karachi, Pakistan",
    },
    {
      type: "education",
      date: "2016",
      title: "Matriculation – Science",
      subtitle: "Programmer School, Karachi, Pakistan",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, position: "relative", overflow: "hidden",
      "&:before": {
        content: '""', position: "absolute", left: -140, top: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(156,39,176,0.18), transparent 70%)", filter: "blur(10px)"
      },
      "&:after": {
        content: '""', position: "absolute", right: -140, bottom: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(25,118,210,0.18), transparent 70%)", filter: "blur(10px)"
      }
    }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Experience & Education
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            A quick look at my journey so far
          </Typography>
        </Box>

        <Paper
          variant="outlined"
          sx={{
            mt: 3,
            px: { xs: 0, md: 1 },
            py: { xs: 1, md: 2 },
            maxWidth: 920,
            mx: "auto",
          }}
        >
          <LabTimeline
            position="right"
            sx={{
              mx: "auto",
              maxWidth: 820,
              "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 }, // remove left gutter from missing opposite content
            }}
          >
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const color = item.type === "work" ? "primary" : "secondary";
              const Icon = item.type === "work" ? WorkOutlineIcon : SchoolIcon;
              return (
                <TimelineItem key={`${item.type}-${index}`}>
                  <TimelineSeparator>
                    <TimelineDot color={color as unknown as TimelineDotProps['color']} variant="filled">
                      <Icon fontSize="small" />
                    </TimelineDot>
                    {!isLast && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: 2 }}>
                    <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5 }}>
                      {item.date}
                    </Typography>
                    <Stack spacing={0.5}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                        <Chip
                          size="small"
                          label={item.type === "work" ? "Work" : "Education"}
                          variant="outlined"
                          sx={{ ml: 0.5 }}
                        />
                      </Stack>
                      {item.subtitle && (
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {item.subtitle}
                        </Typography>
                      )}
                      {item.details && item.details.length > 0 && (
                        <Stack
                          component="ul"
                          sx={{
                            m: 0,
                            pl: 2,
                            color: "text.secondary",
                            listStyleType: "disc",
                            listStylePosition: "outside",
                          }}
                          gap={0.75}
                        >
                          {item.details.map((d, i) => (
                            <Typography
                              key={i}
                              component="li"
                              variant="body2"
                              sx={{ display: "list-item", listStyleType: "inherit" }}
                            >
                              {d}
                            </Typography>
                          ))}
                        </Stack>
                      )}
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </LabTimeline>
        </Paper>
      </Container>
    </Box>
  );
}


