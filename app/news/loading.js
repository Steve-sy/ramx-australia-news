import React from "react";
import { Box, CircularProgress, Typography, Fade } from "@mui/material";

export default function LoadingNews() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full screen height
        backgroundColor: "#f5f5f5", // Light grey background
      }}
    >
      {/* Circular spinner */}
      <CircularProgress
        size={80}
        thickness={4.5}
        sx={{
          color: "#1976d2", // Custom color for the spinner
          mb: 2, // Margin below spinner
        }}
      />

      {/* Animated Loading Text */}
      <Fade in={true} timeout={800}>
        <Typography
          variant="h5"
          sx={{
            color: "#555",
            fontWeight: "bold",
            letterSpacing: "1.2px",
            animation: "pulse 1.5s infinite", // Pulse effect for text
            "@keyframes pulse": {
              "0%": { opacity: 1 },
              "50%": { opacity: 0.6 },
              "100%": { opacity: 1 },
            },
          }}
        >
          Loading News...
        </Typography>
      </Fade>
    </Box>
  );
}
