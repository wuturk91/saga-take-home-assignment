# saga-take-home-assignment

>This is my submission for the Saga Front End Developer Task

## Setup Instructions

### Installation
1. Clone this repository:
	```sh
	git clone https://github.com/wuturk91/saga-take-home-assignment.git
	cd saga-take-home-assignment
	```
2. Install dependencies:
	```sh
	npm install
	```

### Running the App
Start the development server:
```sh
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Project Overview
- Built with React, TypeScript, and Vite
- Uses CSS Modules for styling
- API requests are proxied via Vite to https://holiday.saga.co.uk

## Project Features
- Onload all products are fetched from the API.
- On selection of a filter, HolidayType or ProductType, products are re-fetched with the given parameters. Both filters can be selected and combined on product search.
- Facets are fetched from the facets endpoint and limited to the two specified in the requirements: HolidayType and ProductType.
- Skeleton components are displayed when products and facets are loading to minimise page flickers and better the UX.


## Project Decisions
- CSS Modules: I believe locally scoped styles make a better dev experience for maintenance and also prevent class name collisions. This allows for more modular and reusable components.
- No CSS Library: I made this decision based on the project being small and simple. Using a library would add additional overhead and increase the bundle size unnecessarily.
- Fetch over third party HTTP libraries: I chose to use the Fetch API instead of a third-party HTTP library, as its native and avoids adding extra dependencies or overhead for a project of this size.
- Sold out products are still displayed. These could have been filtered out, but I decided to keep them in for this quick MVP.

## Project Timeline
- I completed the core of the project within the estimate of 2 hours.
- I used an additional 2 hours between breaks to add skeleton components, better error handling, and to add more CSS to the components for a more responsive experience. I also reviewed my code and made any adjustments within that time.

## If I Had More Time
- I wanted to complete the project within a reasonable timeframe. For this reason I was unable to complete all of the optionals.
- Given more time I would have added unit tests using React Testing Library and attempted pagination.

## Additional Notes
- After further testing once I completed the work, I noticed that there was some minor improvements that should and could be made, and I took the liberty of adding these for better UX. Listing them here for transparency:
   - Filter Params: Filters were not being added in params. An oversight which meant that filters were lost when a refresh occurred and deep linking would not work if a user shared a link with another. Due to time and again to avoid another dependency on a simple app (React Router), I decided to use History API and pass through params to the URL whenever a filter changed.
   - Responsiveness of product cards: When going through my work and viewing the products and testing responsiveness, I noticed that ProductCards that had words that were long, like 'circumnavigation' would break the layout and cause the card to look off. For this reason I made a quick decision to alter the font-size.
   - I also removed the count from the facet dropdowns as they were confusing when seeing no results after combining filters.
