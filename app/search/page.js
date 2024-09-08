"use client";

import React, { useState } from "react";
import { Typography, TextField, Box, Button, Slide } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter(); // Use router for navigation

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Handle search button click or Enter key press
  const handleSearch = () => {
    // Redirect to the NewsPage with the search query in the URL
    if (search) {
      router.push(`/news?query=${search}`);
    }
  };

  return (
    <>
      <Slide direction="up" in={true} timeout={800}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
            minHeight: "100vh",
            justifyContent: "center", // Vertically center the content
            backgroundColor: "#f5f5f5", // Light background
            padding: "40px", // Add some padding to the entire container
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
            borderRadius: "16px", // Rounded corners
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#333",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            Search for the Latest News
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              marginBottom: "40px",
            }}
          >
            Stay updated with the latest headlines around the world. Search by
            any keyword!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "600px",
              backgroundColor: "#fff",
              borderRadius: "30px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // More pronounced shadow
              overflow: "hidden", // Ensure content inside doesn't overflow
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter keywords..."
              fullWidth
              value={search}
              onChange={handleSearchChange}
              sx={{
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px 0 0 30px", // Rounded on the left
                  backgroundColor: "#fff",
                  fontSize: "1.1rem",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{
                borderRadius: "0 30px 30px 0", // Rounded on the right
                padding: "17px 20px",
                backgroundColor: "#1976d2", // Custom blue color
                transition: "background-color 0.3s ease", // Smooth background transition
                "&:hover": {
                  backgroundColor: "#1565c0", // Darker blue on hover
                  boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
                },
              }}
            >
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Slide>
    </>
  );
}
