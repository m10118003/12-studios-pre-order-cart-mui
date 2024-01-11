// QuickStart.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import { Roboto_Condensed } from "next/font/google";
import {
  Typography,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const robotoFont = Roboto_Condensed({ subsets: ["latin"] });

export default function QuickStart() {
  return (
    <div>
      <Navbar />
      <Container sx={ { textAlign: "center", fontFamily: robotoFont }}>
        <Box sx={{ p: 0 }}>
          <Typography variant="h3" sx={{ p: 5, fontWeight: "bold", textDecoration: 'underline', color: "#213547" }}>
            Hello React.
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 0, fontWeight: "600", color: "#e11d48" }}
          >
            Start editing to see some magic happen!
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", color: "#ca8a04" }}
            >
              How to create and nest components
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontStyle: "italic",
                color: "#65a30d",
                fontWeight: "800",
              }}
            >
              How to add markup and styles
            </Typography>
            <Typography sx={{ fontWeight: "500", color: "blue" }}>
              How to display data
            </Typography>
            <Typography
              sx={{
                my: 2,
                color: "skyblue",
                textDecoration: "overline",
                textDecorationStyle: "dashed",
                textDecorationThickness: 4,
              }}
            >
              3.14159265358979…
            </Typography>
            <Box
              sx={{
                color: "grey",
                textDecoration: "overline",
                textDecorationStyle: "dashed",
                textDecorationThickness: 4,
              }}
            >
              <Typography sx={{ textAlign: "center", fontWeight: "500" }}>
                How to render conditions and lists
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#4f46e5",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              How to respond to events and update the screen
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                color: "#9333ea",
                textTransform: "uppercase",
              }}
            >
              How to share data between components
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
