"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  repoUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card variant="outlined" sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {project.image ? (
        <CardMedia sx={{ height: 300 }} image={project.image} title={project.title} />
      ) : null}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        {project.tech && project.tech.length ? (
          <Typography variant="caption" sx={{ mt: 1, display: "block", color: "text.secondary" }}>
            {project.tech.join(" · ")}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions>
        {project.liveUrl ? (
          <Button size="small" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Demo</Button>
        ) : null}
        {project.repoUrl ? (
          <Button size="small" href={project.repoUrl} target="_blank" rel="noopener noreferrer" variant="outlined">Code</Button>
        ) : null}
        {project.documentationUrl ? (
          <Button size="small" href={project.documentationUrl} target="_blank" rel="noopener noreferrer" variant="outlined">Documentation</Button>
        ) : null}
      </CardActions>
    </Card>
  );
}


