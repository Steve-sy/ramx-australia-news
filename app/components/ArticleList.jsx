"use client"; // This makes it a Client Component

import { Grid, Button, Typography } from "@mui/material";
import Article from "./Article"; // Your existing Article component
import { useState } from "react";
import moment from "moment"; // Optional, for date formatting

export default function ArticleList({ articles }) {
  const pageSize = 10; // Articles per page
  const totalPages = Math.ceil(articles.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic to display articles based on the current page
  const indexOfLastArticle = currentPage * pageSize;
  const indexOfFirstArticle = indexOfLastArticle - pageSize;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Grid container spacing={2} marginTop={1}>
        {currentArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Article
              title={article.title}
              image={article.urlToImage}
              author={article.author}
              date={moment(article.publishedAt).format("YYYY-MM-DD")} // Optional date formatting
              description={article.description}
              url={article.url}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Typography variant="body1" style={{ margin: "0 20px" }}>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          variant="contained"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </>
  );
}
