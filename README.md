[![Netlify Status](https://api.netlify.com/api/v1/badges/e114a8aa-a9f6-4085-a931-9612e8e718a8/deploy-status)](https://app.netlify.com/sites/taupe-faun-99c9f8/deploys)

# CarGoUA App

This is a React application for a car rental company operating in Ukraine. Users can explore information about the company's services, browse a catalog of available cars, and view favorite listings. The app also allows users to filter cars based on make, hourly rental price, and mileage range.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Redux State](#redux-state)
- [Routing](#routing)
- [Filtering](#filtering)
- [Pagination](#pagination)

## Features

- **Home Page:** Provides a general overview of the company's services.
- **Catalog Page:** Displays a catalog of cars with filtering options.
- **Favorites Page:** Shows listings added to the user's favorites.
- **Advertisement Details:** Modal with detailed information on a selected car.
- **Learn More Button:** Opens a modal with detailed information about a car.
- **Contact Button:** Enables users to contact the company via phone.



## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/vasylkivt/CarGoUA.git`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Technologies Used

- React
- Redux
- React Router
- Axios (for API requests)
- Mockapi.io (for mock backend)

## API

The application uses a mock API created with [Mockapi.io](https://mockapi.io/). The `adverts` resource contains information about car listings.

## Redux State

The Redux store manages the state of the application, including user favorites and filters.

## Routing

The app uses React Router for navigation. The available routes are:
- `/` - Home Page
- `/catalog` - Catalog Page
- `/favorites` - Favorites Page

If a user tries to access a non-existent route, they will be redirected to the home page.

## Filtering

Users can filter car listings based on make, hourly rental price, and mileage range. The dropdowns and input fields provide a seamless filtering experience.

## Pagination

The catalog page displays 12 listings per page, and additional listings can be loaded with the "Load more" button. Pagination is implemented on the backend.




