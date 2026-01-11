"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import UpcomingIcon from "@mui/icons-material/Upcoming";

type Blog = {
  title: string;
  description: string;
  url?: string; // if missing, treat as coming soon
  date?: string; // ISO string
  tags?: string[];
};

const blogs: Blog[] = [
  {
    title: "A Brief Introduction To AI Agents",
    description: "A brief overview of AI agents, what they are, why they matter, and how they can be used to build AI-powered applications.",
    url: "https://medium.com/@yumnaahwaris/a-brief-introduction-to-ai-agents-79f68b6cfb52",
    tags: ["AI Agents", "AI", "LangChain", "LangGraph"],
    date: "Sep 6, 2025",
  },
  {
    title: "The Gist of LangChain",
    description: "A brief overview of LangChain, a library for building language model applications - what it is, why it matters, and how it can be used to build AI-powered applications.",  
    url: "https://medium.com/@yumnaahwaris/the-gist-of-langchain-9e01be3dd714",
    tags: ["LangChain", "AI", "LangGraph"],
    date: "Sep 1, 2025",
  },
  {
    title: "What Drives Exam Scores? A Clean, Reproducible ML Pipeline",
    description: "Analyzing behavioral, school, and family factors to predict exam scores.",
    url: "https://kaggle.com/writeups/yumnawaris/what-drives-exam-scores-a-clean-reproducible-ml-pi",
    tags: ["ML", "Data Analysis", "Data Science", "Kaggle"],
    date: "Aug 31, 2025",
  }
];
export default function BlogsPage() {
  const [search, setSearch] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string | null>(null);

  const allTags = React.useMemo(() => {
    const set = new Set<string>();
    blogs.forEach((b) => b.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    return blogs
      .filter((b) => (activeTag ? b.tags?.includes(activeTag) : true))
      .filter((b) =>
        q
          ? b.title.toLowerCase().includes(q) ||
            b.description.toLowerCase().includes(q) ||
            (b.tags || []).some((t) => t.toLowerCase().includes(q))
          : true
      );
  }, [search, activeTag]);
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
            Writeups
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            Writeups on various topics I&apos;ve worked on
          </Typography>
        </Box>
        <Stack spacing={2} sx={{ mb: 3 }}>
          <TextField
            placeholder="Search posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{ startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )}}
          />
          {!!allTags.length && (
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
              <Chip label="All" color={!activeTag ? "primary" : undefined} variant={!activeTag ? "filled" : "outlined"} onClick={() => setActiveTag(null)} />
              {allTags.map((t) => (
                <Chip key={t} label={t} color={activeTag === t ? "primary" : undefined} variant={activeTag === t ? "filled" : "outlined"} onClick={() => setActiveTag(t)} />
              ))}
            </Stack>
          )}
        </Stack>

        <Grid container spacing={2}>
          {filtered.map((post) => {
            const comingSoon = !post.url;
            return (
              <Grid key={post.title} size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, display: "grid", gap: 1.25, height: "100%" }}>
                  <Typography variant="h5">{post.title}</Typography>
                  {post.date ? (
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>{new Date(post.date).toLocaleDateString()}</Typography>
                  ) : null}
                  <Typography sx={{ color: "text.secondary" }}>{post.description}</Typography>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                    {(post.tags || []).map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Stack>
                  <Box>
                    <Button
                      size="small"
                      variant={comingSoon ? "outlined" : "contained"}
                      endIcon={comingSoon ? <UpcomingIcon /> : <OpenInNewIcon />}
                      component="a"
                      href={comingSoon ? undefined : post.url}
                      target={comingSoon ? undefined : "_blank"}
                      rel={comingSoon ? undefined : "noopener noreferrer"}
                      disabled={comingSoon}
                    >
                      {comingSoon ? "Coming soon" : "Read post"}
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}


