"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 4, mt: 8, position: "relative", overflow: "hidden",
      "&:before": {
        content: '""', position: "absolute", left: -120, top: -100, width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(156,39,176,0.15), transparent 70%)", filter: "blur(8px)"
      },
      "&:after": {
        content: '""', position: "absolute", right: -120, bottom: -100, width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(25,118,210,0.15), transparent 70%)", filter: "blur(8px)"
      }
    }}>
      <Container sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
        <Typography variant="body2" suppressHydrationWarning>© {new Date().getFullYear()} Aiman Siddiqui. All rights reserved.</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Typography variant="body2" component={Link} href="/">
            About
          </Typography>
          <Typography variant="body2" component={Link} href="/moocs-certs">
            Certificates
          </Typography>
          <Typography variant="body2" component={Link} href="/projects">
            Projects
          </Typography>
          {/* <Typography variant="body2" component={Link} href="/blogs">
            Blogs
          </Typography> */}
          {/* <Typography variant="body2" component={Link} href="https://github.com/yumnawaris" target="_blank" rel="noopener noreferrer">
            GitHub
          </Typography> */}
          <Typography variant="body2" component={Link} href="https://www.linkedin.com/in/aiman-siddiqui-208b31243" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

