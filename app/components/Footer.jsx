import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        py: 6,
        px: 4,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Grid container spacing={4}>
        {/* About Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            Welcome to our website! We deliver the latest news from around
            Australia, powered by the NewsAPI. As a platform developed by
            Mustafa Ramadan, a skilled web developer and IT professional, our
            goal is to provide a seamless and intuitive user experience.
          </Typography>
        </Grid>

        {/* Social Media Links Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              color="inherit"
            >
              <FacebookIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              color="inherit"
            >
              <TwitterIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              color="inherit"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              color="inherit"
            >
              <InstagramIcon fontSize="large" />
            </Link>
          </Box>
        </Grid>

        {/* Contact Info Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Programming Requests:
          </Typography>
          <Typography variant="body2">
            Mustafa Ramadan
            <br />
            Email: mustafa.ramx@gmail.com
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ mt: 4, color: "#aaa" }}>
        © {new Date().getFullYear()} Mustafa Ramadan. All rights reserved.
      </Typography>
    </Box>
  );
}
