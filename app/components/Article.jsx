import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";

// Styled Card with hover effect
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
}));

export default function Article({
  title,
  image,
  author,
  description,
  date,
  url,
}) {
  // Format the date
  const dateString = date;
  const formattedDate = moment(dateString).format("YYYY-MM-DD");

  return (
    <StyledCard>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          height="140"
          image={
            image ??
            "https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg"
          }
          alt={title}
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Divider sx={{ margin: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {author ? `By: ${author}` : "Author Unknown"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formattedDate ? `Published on: ${formattedDate}` : "Date Unknown"}
          </Typography>
        </CardContent>
      </a>
    </StyledCard>
  );
}
