"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";

export default function Contact() {
  const [copied, setCopied] = React.useState<null | "email" | "phone">(null);

  const email = "siddiquiaiman351@gmail.com";
  const phone = "+92 331 2080656";

  const socials = [
    // { name: "GitHub", url: "https://github.com/yumnawaris", icon: GitHubIcon },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aiman-siddiqui-208b31243/", icon: LinkedInIcon },
    // { name: "X / Twitter", url: "https://x.com/waris_yumna", icon: TwitterIcon },
    // { name: "Medium", url: "https://medium.com/@yumnaahwaris", icon: ArticleIcon },
    // { name: "Coursera", url: "https://www.coursera.org/user/85a7da3566159e08061efacef9258118", icon: SchoolIcon },
    // { name: "Udemy", url: "https://www.udemy.com/user/yumna-waris/", icon: SchoolIcon },
    { name: "Website", url: "https://aimansiddiqui.github.io/aiman-portfolio", icon: LanguageIcon },
  ] as const;

  const copy = async (text: string, key: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, position: "relative", overflow: "hidden",
      "&:before": {
        content: '""', position: "absolute", left: -160, top: -120, width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(25,118,210,0.22), transparent 70%)", filter: "blur(12px)"
      },
      "&:after": {
        content: '""', position: "absolute", right: -160, bottom: -120, width: 420, height: 420, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(156,39,176,0.22), transparent 70%)", filter: "blur(12px)"
      }
    }}>
      <Container>
       <Typography variant="h3" sx={{ mb: 4, fontWeight: 800, background: "linear-gradient(90deg, #9c27b0, #1976d2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Contact</Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 3, height: "100%" }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
                <EmailIcon color="primary" />
                <Typography variant="h6">Email</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>{email}</Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton component="a" href={`mailto:${email}?subject=Hello%20Aiman`} aria-label="Send email">
                    <EmailIcon fontSize="small" />
                  </IconButton>
                  <IconButton onClick={() => copy(email, "email")} aria-label="Copy email">
                    {copied === "email" ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                  </IconButton>
                </Stack>
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
                <PhoneIcon color="primary" />
                <Typography variant="h6">Phone</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="body2" sx={{ color: "text.secondary" }}>{phone}</Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton component="a" href={`tel:${phone}`} aria-label="Call">
                    <PhoneIcon fontSize="small" />
                  </IconButton>
                  <IconButton onClick={() => copy(phone, "phone")} aria-label="Copy phone">
                    {copied === "phone" ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                  </IconButton>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ textAlign: { xs: "left", md: "center" }, mb: 2 }}>Social</Typography>
              <Grid container spacing={1.5}>
                {socials.map(({ name, url, icon: Icon }) => (
                  <Grid key={name} size={{ xs: 6, sm: 4 }}>
                    <Box component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: "none" }}>
                      <Paper variant="outlined" sx={{ p: 1.5, display: "flex", alignItems: "center", gap: 1, justifyContent: "center", borderRadius: 2,
                        transition: "transform .2s ease, box-shadow .2s ease", '&:hover': { transform: "translateY(-2px)", boxShadow: 4 } }}>
                        <Icon fontSize="small" />
                        <Typography variant="body2">{name}</Typography>
                      </Paper>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


