"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

export type Activity = {
  name: string;
  description?: string;
  image?: string;
};

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: "100%",
        overflow: "hidden",
        bgcolor: "background.paper",
        borderRadius: 2,
      }}
    >
      <Box
        component="img"
        src={activity.image || "/window.svg"}
        alt={activity.name}
        sx={{
          width: "100%",
          maxHeight: 320,
          objectFit: "contain",
          display: "block",
          bgcolor: "background.default",
          p: 2,
        }}
      />

      <Box sx={{ p: 2.5 }}>
        <Stack spacing={1.25}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {activity.name}
          </Typography>
          {activity.description ? (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "pre-line",
                lineHeight: 1.6,
              }}
            >
              {activity.description}
            </Typography>
          ) : null}
        </Stack>
      </Box>
    </Paper>
  );
}

