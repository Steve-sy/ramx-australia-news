# Australian News Search Portal By Ramx 📰🔍

[![Next.js](https://img.shields.io/badge/Next.js-v13+-blue)](https://nextjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-v5-blue)](https://mui.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v16+-green)](https://nodejs.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)

Welcome to the **News Search Application**! This modern web app, built with **Next.js** and **Material-UI**, allows users to search for the latest news articles from around the world using the **NewsAPI**. It features a clean, responsive UI, a loading spinner, search functionality, and pagination.

Additionally, our app includes a **Home Page** dedicated to **Australia**, displaying the latest news updates from Australia by default. This makes it an ideal tool for anyone interested in current Australian affairs.

## Check the website: https://aussi-news-ramx.vercel.app/
---

## Features ✨

- 🇦🇺 **Australian News Page**: Displays the latest news about **Australia** on the home page.
- 🔍 **Real-Time News Search**: Search for news articles based on any keyword.
- ⏳ **Loading Animation**: Beautiful loading screen with a spinner and pulsing text.
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop views using Material-UI.
- 📄 **Pagination**: Navigate through news articles with pagination controls.
- 🚀 **Next.js Framework**: Utilizes Next.js for server-side rendering and optimized performance.
- 🌐 **NewsAPI Integration**: Fetches real-time news data using the NewsAPI.

---

## Tech Stack 🛠️

- **Next.js**: React-based framework for server-side rendering and static site generation.
- **React**: UI library for building user interfaces.
- **Material-UI (MUI)**: UI components and design system.
- **NewsAPI**: External API for fetching news data.
- **JavaScript (ES6)**: Modern JavaScript syntax.
- **Node.js**: Backend runtime environment.

---

## Prerequisites 📦

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn** (v1 or higher)

Check installation with:

```bash
node -v
npm -v
```

Installation & Setup ⚙️

Follow these steps to run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/news-search-app.git
cd news-search-app
```

2. Install dependencies:

Using npm:

```bash
npm install
```

3. Get your NewsAPI key:
```bash
•Sign up on NewsAPI.org and get your API key.
•Go to news/page.jsx file in the project and add your NewsAPI key:
your_api_key_here
```

4. Run the development server:

Using npm:
```bash
npm run dev
```

Open http://localhost:3000 to view it in the browser.

Usage 🖥️

	1.	Home Page for Australian News: Upon landing on the home page, users will see the latest news about Australia by default, offering a quick overview of current events in Australia.
	2.	On the search page, enter the keywords you’d like to search for in the input field.
	3.	Click on the Search button, and the app will display the latest news articles based on your query.
	4.	Browse through the results using the pagination buttons.
	5.	Click on an article to read it on the original news source.

Customization 🎨

	1.	Material-UI Theme: You can easily customize the colors, typography, and spacing using Material-UI’s theme provider. Modify the theme in app/layout.jsx to suit your brand.
	2.	Loading Animation: The LoadingNews.jsx component is where the loading spinner and animation live. Feel free to tweak this as per your requirements.

API Configuration 🔑

The app uses NewsAPI to fetch news articles. Follow these steps to configure it:

	1.	Go to NewsAPI.org and sign up for a free account.
	2.	Get your API key and add it to your news/page.jsx file as shown in the Installation section above.
	3.	Ensure the API call in page.jsx uses your query parameters correctly:
const response = await fetch(
  `https://newsapi.org/v2/everything?q=${search}&from=today&sortBy=publishedAt&apiKey=${API_KEY}`
);

Contributing 🤝

We welcome contributions! To contribute:

	1.	Fork the repository.
	2.	Create a new branch for your feature or bug fix.
	3.	Submit a pull request with your changes.

Please ensure you follow the code of conduct and coding guidelines when contributing to this project.

License 📜

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements 🙌

	•	Next.js for their amazing framework.
	•	Material-UI for their awesome UI components.
	•	NewsAPI for providing free access to up-to-date news data.

Thank you for checking out our project! 🌟 If you liked it, please give it a star ⭐ on GitHub.

