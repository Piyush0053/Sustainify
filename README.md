 
# Sustainify - React Implementation

 Sustainify , which focuses on recycling and sustainability. The application allows users to sell their recyclable items, check exchange rates, and learn about sustainable practices through blog posts.

## Project Structure

The project is organized into the following structure:

```
sustainify-react/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Blog.js
│   │   ├── Blog.css
│   │   ├── ExchangeRates.js
│   │   ├── ExchangeRates.css
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── RecycleNow.js
│   │   ├── RecycleNow.css
│   │   ├── Thanks.js
│   │   └── Thanks.css
│   ├── assets/
│   │   └── images/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Features

- **Home Page**: Introduction to Sustainify and its mission
- **Recycle Now**: Form to submit recyclable items for pickup
- **Exchange Rates**: Display of current rates for different recyclable materials
- **Blog**: Information about sustainable practices and environmental awareness
- **Responsive Design**: Works on different screen sizes

## How to Run the Project

1. Make sure you have Node.js and npm installed on your computer
2. Navigate to the project directory in your terminal
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and go to: `http://localhost:3000`

## Required Image Files

Before running the application, you need to copy the following image files from the original project's Images folder to the src/assets/images folder:

- logo.png
- machli.jpg
- img1.png
- 1.png
- 2.png
- 3.png

## Technologies Used

- React.js
- React Router for navigation
- CSS for styling
