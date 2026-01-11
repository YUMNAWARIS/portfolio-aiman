/* eslint-disable react/jsx-key */
"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip, { ChipProps } from "@mui/material/Chip";

type Activity = {
  name: string;
  description?: string;
  image?: string;
};

const activities: Activity[] = [
  {
    name: "Effect of emulsifier concentration on the styrene conversion during production of polystyrene",
    description: `An experimental investigation was conducted to examine the effect of emulsifier concentration on monomer conversion during the emulsion polymerization of styrene. The polymerization system consisted of styrene dispersed in an aqueous medium using sodium dodecyl sulfate (SDS) as the emulsifying agent and potassium persulfate (KPS) as a free-radical initiator. Reaction conditions were kept constant with respect to monomer (20 mL) and initiator (0.2 g) concentrations, while the SDS concentration was systematically varied (0.3, 0.6, and 0.9 g).
    Following a fixed reaction time, polymer coagulation was achieved using alum to isolate unreacted monomer and polymer particles. The recovered polymer was filtered, washed, and dried for comparative yield analysis. The study elucidated the influence of emulsifier concentration on micelle formation, particle nucleation, and styrene conversion, providing insight into kinetic and colloidal aspects of emulsion polymerization relevant to polymer synthesis and process optimization. `,
    image: "/activities/lab-work-1.jpeg",
  },
  {
    name: "Thermal Property Analysis of Polymer - Metal Composites",
    // organizer: "Fast Procm.net",        
    description: `This experimental study was conducted to determine the overall heat transfer coefficient and specific heat of polymer-based composite materials reinforced with metallic fillers. Two distinct composite systems were prepared: an Epoxy-Aluminum (Sample 1) and an Ethylene Vinyl Acetate (EVA)-Copper (Sample 2). The samples were cast in wooden molds and their thermal properties were analyzed using a Linear Heat Transfer Unit.
    The results demonstrated a significant contrast in thermal performance between the two systems. In Sample 1 (Epoxy-Aluminum), no heat was observed to transfer to the cold end, which was attributed to the low thermal conductivity of aluminum and the low quantity of the conductive material, resulting in a deficiency of free electrons for effective heat conduction. Conversely, Sample 2 (EVA-Copper) exhibited measurable thermal transfer.
    The conclusion highlights the direct and positive relationship between the presence of free electrons (supplied by the metallic filler) and the heat transfer capability of the composite. The superior thermal performance of the copper-filled system (Sample 2) compared to the aluminum-filled system (Sample 1) provides valuable insight into optimizing composite material selection for applications requiring enhanced heat transfer.`,
    image: "/activities/lab-work-2.jpeg",
  },
];

function ActivityCard({ a }: { a: Activity }) {
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
      {/* Image banner */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={a.image || "/window.svg"}
          alt={a.name}
          sx={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            display: "block",
            bgcolor: "action.hover",
          }}
        />
      </Box>

      {/* Body */}
      <Box sx={{ p: 2.5 }}>
        <Stack spacing={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {a.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
          </Typography>
          {a.description && (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {a.description}
            </Typography>
          )}
        </Stack>
      </Box>
    </Paper>
  );
}

export default function ActivitiesPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Lab Work
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            Lab Work I&apos;ve done
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            },
          }}
        >
          {activities.map((a) => (
            <ActivityCard a={a} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}