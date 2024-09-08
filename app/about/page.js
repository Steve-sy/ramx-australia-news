import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function about() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box>
          {/* Website Section */}
          <Paper elevation={3} sx={{ p: 4, mb: 5 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              About Our Website
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to our website, a one-stop platform for the latest news
              about Australia. Built using state-of-the-art technologies such as
              React and Next.js, this platform provides you with real-time,
              up-to-date news from a wide range of sources. Our website is
              designed with both speed and responsiveness in mind, ensuring an
              intuitive and seamless user experience across all devices. With a
              focus on delivering high-quality news, we ensure that our users
              are always informed about what's happening around them.
            </Typography>
          </Paper>

          {/* NewsAPI Section */}
          <Paper elevation={3} sx={{ p: 4, mb: 5 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} md={3}>
                <img
                  srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTop95oa3L3azM_q5GPHaWDGDKZOE5mFnqQ&s"
                  alt="NewsAPI Logo"
                  width={250}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="h4" component="h2" gutterBottom>
                  About NewsAPI
                </Typography>
                <Typography variant="body1" paragraph>
                  The news you see on this platform is powered by <b>NewsAPI</b>
                  , a service that allows developers to retrieve breaking news
                  headlines, articles, and blogs from major news sources around
                  the world. Through its efficient API, we bring you the most
                  current events happening in Australia and across the globe.
                  NewsAPI aggregates stories from numerous reputable outlets,
                  giving you comprehensive access to diverse perspectives and
                  ensuring the information you receive is trustworthy and
                  reliable.
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* About Mustafa Ramadan */}
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              The Developer Mustafa Ramadan
            </Typography>
            <Typography variant="body1" paragraph>
              I’m <b>Mustafa Ramadan</b>, a seasoned software developer and IT
              professional with expertise in several areas of technology. I
              specialize in:
            </Typography>

            <Typography variant="h6" gutterBottom>
              Web Development
            </Typography>
            <Typography variant="body1" paragraph>
              With deep knowledge in front-end and back-end development, I have
              worked extensively with modern frameworks such as PHP Laravel,
              React.js and Next.js. I’m passionate about creating dynamic and
              responsive websites that provide a fantastic user experience.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Android and iOS Development
            </Typography>
            <Typography variant="body1" paragraph>
              Having developed mobile applications for both Android and iOS, I
              leverage my knowledge of platforms such as Flutter, Kotlin, Java,
              and Swift to build native apps with smooth performance and
              user-friendly interfaces.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Network and Server Management
            </Typography>
            <Typography variant="body1" paragraph>
              I’m experienced in managing both large and small-scale networks,
              ensuring robust security protocols and maintaining seamless
              connectivity. I’m also skilled in handling various server
              configurations, including Linux and Windows servers.
            </Typography>

            <Typography variant="h6" gutterBottom>
              IT Professional
            </Typography>
            <Typography variant="body1" paragraph>
              As an IT professional, I’ve worked with businesses to optimize
              their IT infrastructure, ensuring efficient workflows, data
              management, and secure environments. My role extends from managing
              networks to troubleshooting issues, implementing security
              protocols, and supporting IT operations.
            </Typography>

            <Typography variant="body1" paragraph>
              If you have any questions or are looking for assistance with your
              next project, feel free to contact me. I'm always excited to
              collaborate on new challenges and contribute my skills to the
              success of your ventures.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
