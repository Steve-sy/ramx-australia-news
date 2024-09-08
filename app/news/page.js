import ArticleList from "../components/ArticleList"; // Import the Client Component
import { Typography } from "@mui/material";

// Server-side component, fetches news based on search query
export default async function NewsPage({ searchParams }) {
  const searchQuery = searchParams?.query || "australia"; // Default search query if none provided

  // Fetch the news data from the API
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchQuery}&from=today&sortBy=publishedAt&apiKey={your_key}`
  );
  const data = await response.json();
  const articles = data.articles || [];

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          "&::first-letter": {
            textTransform: "uppercase",
            fontWeight: "bold", // optional, to make the first letter bold
            display: "flex",
          },
        }}
      >
        {searchQuery}
        <span
          style={{ fontSize: "1.5rem", fontWeight: "bold", marginLeft: "4px" }}
        >
          News For Today
        </span>
      </Typography>

      {/* Pass articles to the Client Component */}
      <ArticleList articles={articles} />
    </>
  );
}
