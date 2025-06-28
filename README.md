# Product Catalog App

A React application that displays products from the Fake Store API in a responsive grid layout. Users can filter products by category, sort by price, search for specific items, and save their favorite products.

## Setup Instructions

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features Implemented

### Required Features
- ✅ Fetch data from the Fake Store API (https://fakestoreapi.com/products)
- ✅ Display products in a grid layout
- ✅ Show product title, price, image, and category
- ✅ Filter products by category (dropdown)
- ✅ Sort by price (ascending/descending)
- ✅ Favorite/unfavorite products with local state persistence
- ✅ Responsive design for both desktop and mobile

### Bonus Features
- ✅ Search functionality to filter products by title/description
- ✅ Loading states during API fetch
- ✅ Error handling for API failures
- ✅ Clean component structure with styled-components

## Design Decisions

### Component Structure
- **App.js**: Main component that manages state and data flow
- **Header**: Simple header with title
- **SearchBar**: Handles user search input
- **Filter**: Contains category filter and price sorting controls
- **ProductList**: Renders the grid of products
- **ProductCard**: Individual product display with favorite toggle

### State Management
- Used React hooks (useState, useEffect) for state management
- Centralized product data and filtering logic in App.js
- Used localStorage to persist user favorites between sessions

### Styling Approach
- Used styled-components for component-scoped CSS
- Implemented a responsive grid that adapts to different screen sizes
- Added subtle hover effects and transitions for better UX
- Ensured consistent spacing and typography throughout

## Notes on Design Decisions

I chose to implement filtering and sorting in the frontend rather than making multiple API calls. This approach provides a smoother user experience since all data is loaded once and manipulated client-side.

The favorites feature uses localStorage to persist user selections between sessions. I considered using a more complex state management solution like Redux, but for this scale of application, React's built-in hooks were sufficient.

For styling, I used styled-components to keep styles scoped to their respective components. This made it easier to maintain and update styles without side effects.

## What I Would Improve With More Time

1. **Pagination**: Currently, all products load at once. With a larger dataset, pagination would improve performance.

2. **Unit Tests**: Add Jest tests for components and functionality.

3. **TypeScript**: Convert the project to TypeScript for better type safety.

4. **Product Detail View**: Add a detailed view when clicking on a product.

5. **Performance Optimizations**: Implement React.memo or useMemo for expensive calculations.

6. **Accessibility**: Improve keyboard navigation and screen reader support.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
