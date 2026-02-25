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
- API requests are proxied via Vite config to https://holiday.saga.co.uk

## Project Features
- Onload all products are fetched from the API.
- Skeleton components are displayed when products and facets are loading to minimise page flickers and better the UX.
- On selection of a filter, HolidayType or ProductType, products are re-fetched with the given parameters. Both filters can be selected and combined on product search.
- Facets are fetched from the facets endpoint and limited to the two specified in the requirements: HolidayType and ProductType.

## Project Decisions
- CSS Modules: I believe locally scoped styles make a better dev experience for maintenance and also prevent class name collisions. This allows for more modular and reusable components.
- No CSS Library: I made this decision based on the project being small and simple. Using a library would add additional overhead and increase the bundle size unnecessarily.
- Fetch over third party HTTP libraries: I chose to use the Fetch API instead of a third-party HTTP library, as its native and avoids adding extra dependencies or overhead for a project of this size.
- Filter Params: Filters are added into URL params allowing for deep linking and not losing results on refresh. Due to time and again to avoid another dependency on a simple app (React Router), I decided to use History API and pass through params to the URL whenever a filter changed.

## Additional Notes
After further testing once I completed the work, I noticed that there was some minor improvements that should and could be made, and I took the liberty of adding these for better UX. Listing them here for transparency:
   - Responsiveness of product cards: When going through my work and viewing various products and testing responsiveness, I noticed that ProductCards that had words that were long or long names, like 'circumnavigation' would break the layout and cause the card to look off. 
   - Facets: I removed the count from the facet dropdowns as they were confusing when seeing no results after combining filters.
	 - Product Listing Count: To give a clear visualisation of how many products are displayed, I added a count onto the sticky facet bar.
	 - Accessibility audit: Adding aria-labels to elements like selects, buttons, and adding a role to my Alert component.

## Project Timeline
- I completed the core of the project within the estimate of 2 hours.
- I used an additional 3 hours to better the project. This was mainly because I decided to go for a redesign, as I had noticed my product cards were too similar to those on the saga website in terms of layout, so I wanted to switch things up to show something different.

## Future Improvements
I wanted to complete the project within a reasonable timeframe. For this reason I was unable to complete all of the optionals.
- Given more time I would have added unit tests using React Testing Library and added pagination.
- Improve overall aesthetic and implement more details within the products cards.
