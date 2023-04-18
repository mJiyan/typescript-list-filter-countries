# Listing and Filtering the Country list - Mayd Code Challenge

This is a list application and it is created to show coding skills to the Mayd (company). The Client-side is developed using React.js, and the backend-side is created with Node.js (Express.js).

I put Express.js between the client and the API server because the API server is not accepting requests from the browser.

Created the project using Typescript and Redux(Thunk). 

Wrote unit tests for the project components using Jest and Enzyme libraries.

Used the Tailwind, in order to, create responsive designs. I used Tailwind because it is really easy to use and it increases the readability of the codes.

Also added Webpack and Babel, in order to increase the appliction performance.

Added Eslint, and Prettier. Also, added Husky in order to prevent pushing badly formatted codes.

Also Dockerized all applications.

## Table of Contents
- [Project Overview](#projectoverview)
- [Installation](#installation)
- [Test](#test)
- [Structure](#structure)
- [Support](#support)
- [Contributing](#contributing)


### ProjectOverview

A short overview of the project

![GIF](./countries.gif)

## Installation
### with Docker
```sh
git clone https://github.com/mJiyan/typescript-list-filter-countries.git
cd typescript-list-filter-countries
docker-compose up --build
-> Open your browser at http://0.0.0.0:8080 
```

### manually
```sh
git clone https://github.com/mJiyan/typescript-list-filter-countries.git
cd typescript-list-filter-countries/server
yarn
yarn start

cd typescript-list-filter-countries/client
yarn
yarn start
Open your browser at http://0.0.0.0:8080 
```


## Test
```sh
git clone https://github.com/mJiyan/typescript-list-filter-countries.git
cd typescript-list-filter-countries/server
yarn
yarn test

cd typescript-list-filter-countries/client
yarn
yarn test
```


## Structure
```
├─ client
│   ├─ .huksy
│   │  ├─ pre-commit
│   │  └─ pre-push
│   ├─ public
│   │  └─ index.html
│   │
│   ├─ src
│   │  ├─ assets
│   │  │  └─ style
│   │  │     └─ tailwind.css
│   │  │
│   │  ├─ config
│   │  │  └─ routes.ts
│   │  │
│   │  ├─ containers
│   │  │  ├─ CountryCardListContainer
│   │  │  │  ├─ CountryCardListContainer.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ CountryInformationContainer
│   │  │  │  ├─ CountryInformationContainer.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ FilterContainer
│   │  │  │  ├─ FilterContainer.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ PreviousPageContainer
│   │  │  │  ├─ PreviousPageContainer.tsx
│   │  │  │  └─ index.ts
│   │  │  └─ index.ts
│   │  │
│   │  ├─ modules
│   │  │  ├─ BackButton
│   │  │  │  ├─ BackButton.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ CountryCard
│   │  │  │  ├─ CountryCard.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ CountryInformation
│   │  │  │  ├─ CountryInformation.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ Flag
│   │  │  │  ├─ Flag.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ Header
│   │  │  │  ├─ Header.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ Regions
│   │  │  │  ├─ Regions.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ Search
│   │  │  │  ├─ Search.tsx
│   │  │  │  └─ index.ts
│   │  │  └─ index.ts
│   │  │
│   │  ├─ pages
│   │  │  ├─ country-details
│   │  │  │  ├─ hooks
│   │  │  │  │  ├─ useGetCountryDetails
│   │  │  │  │  │  └─ useGetCountryDetails.ts
│   │  │  │  │  └─ index.ts
│   │  │  │  ├─ templates
│   │  │  │  │  ├─ MainTemplate
│   │  │  │  │  │  ├─ MainTemplate.tsx
│   │  │  │  │  │  └─ index.ts
│   │  │  │  │  └─ index.ts
│   │  │  │  ├─ CountryDetailsPage.tsx
│   │  │  │  └─ index.ts
│   │  │  │
│   │  │  ├─ country-list
│   │  │  │  ├─ hooks
│   │  │  │  │  ├─ useGetCountryList
│   │  │  │  │  │  └─ useGetCountryList.ts
│   │  │  │  │  └─ index.ts
│   │  │  │  ├─ templates
│   │  │  │  │  ├─ MainTemplate
│   │  │  │  │  │  ├─ MainTemplate.tsx
│   │  │  │  │  │  └─ index.ts
│   │  │  │  │  ├─ SecondTemplate
│   │  │  │  │  │  ├─ SecondTemplate.tsx
│   │  │  │  │  │  └─ index.ts
│   │  │  │  │  └─ index.ts
│   │  │  │  ├─ CountryListPage.tsx
│   │  │  │  └─ index.ts
│   │  │  └─ index.ts
│   │  │
│   │  ├─ redux
│   │  │  ├─ actions
│   │  │  │  ├─ Country
│   │  │  │  │  ├─ index.ts
│   │  │  │  │  └─ types.ts
│   │  │  │  └─ index.ts
│   │  │  └─ reducers
│   │  │     ├─ Country
│   │  │     │   └─ index.ts
│   │  │     └─ index.ts
│   │  │
│   │  ├─ services
│   │  │  ├─ api.ts
│   │  │  ├─ const.ts
│   │  │  └─ index.ts
│   │  │
│   │  ├─ shared
│   │  │  ├─ storage
│   │  │  │  └─ themeLocalStorage.tsx
│   │  │  ├─ const.ts
│   │  │  ├─ types.ts
│   │  │  └─ utils.ts
│   │  │
│   │  ├─ ui-library
│   │  │  ├─ BorderCountryWrapper
│   │  │  │  ├─ BorderCountryWrapper.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ Box
│   │  │  │  ├─ Box.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ Button
│   │  │  │  ├─ Button.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ CountryCardListWrapper
│   │  │  │  ├─ CountryCardListWrapper.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ CountryDetailsWrapper
│   │  │  │  ├─ CountryDetailsWrapper.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ CountryInformationDetailsWrapper
│   │  │  │  ├─ CountryInformationDetailsWrapper.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ CountryInformationTextWrapper
│   │  │  │  ├─ CountryInformationTextWrapper.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ CountryInformationWrapper
│   │  │  │  ├─ CountryInformationWrapper.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ FilterWrapper
│   │  │  │  ├─ FilterWrapper.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ FlagBox
│   │  │  │  ├─ FlagBox.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ FlagImageBox
│   │  │  │  ├─ FlagImageBox.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ HeaderTitle
│   │  │  │  ├─ HeaderTitle.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ HeaderWrapper
│   │  │  │  ├─ HeaderWrapper.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ icons
│   │  │  │  ├─ ArrowBackIcon
│   │  │  │  │  ├─ ArrowBackIcon.tsx
│   │  │  │  │  └─ index.ts
│   │  │  │  ├─ ArrowDownIcon
│   │  │  │  │  ├─ ArrowDownIcon.tsx
│   │  │  │  │  └─ index.ts
│   │  │  │  ├─ DarkMoonIcon
│   │  │  │  │  ├─ DarkMoonIcon.tsx
│   │  │  │  │  └─ index.ts
│   │  │  │  ├─ LightMoonIcon
│   │  │  │  │  ├─ LightMoonIcon.tsx
│   │  │  │  │  └─ index.ts
│   │  │  │  ├─ SearchIcon
│   │  │  │  │  ├─ SearchIcon.tsx
│   │  │  │  │  └─ index.ts
│   │  │  │  └─ index.ts
│   │  │  ├─ PreviousPageWrapper
│   │  │  │  ├─ PreviousPageWrapper.tsx
│   │  │  │  └─ index.ts
│   │  │  ├─ Text
│   │  │  │  ├─ Text.tsx
│   │  │  │  └─ index.ts
│   │  │  └─ index.ts
│   │  ├─ react-app-env.d.ts
│   │  ├─ App.tsx
│   │  ├─ index.tsx
│   │  └─ Store.ts
│   │
│   ├─ .dockerignore
│   ├─ .eslintrc
│   ├─ .gitignore
│   ├─ .prettierrc
│   ├─ babel.config.js
│   ├─ Dockerfile
│   ├─ jest.config.js
│   ├─ LICENSE
│   ├─ postcss.config.js
│   ├─ tailwind.config.js
│   ├─ tsconfig.json
│   ├─ package.json
│   └─ webpack.config.js
│
│
├─ server
│   ├─ src
│   │  ├─ api
│   │  │  ├─ controllers
│   │  │  │  └─ countriesController.js
│   │  │  └─ routes
│   │  │     ├─ countriesRoutes.js
│   │  │     └─ routeManager.js
│   │  ├─ config
│   │  │  └─ index.js
│   │  ├─ loaders
│   │  │  ├─ express.js
│   │  │  └─ index.js
│   │  └─ app.js
│   ├─ __test__
│   │  └─ api
│   │     ├─ controllers
│   │     │  ├─ country.test.js
│   │     │  └─ index.test.js
│   │     └─ helpers
│   │        └─ test.model.json
│   ├─ .dockerignore
│   ├─ .env
│   ├─ .gitignore
│   ├─ Dockerfile
│   ├─ LICENSE
│   └─ package.json
├─ docker-compose.yml
└─ README.md
```

## Support

Please [open an issue](https://github.com/mJiyan/typescript-list-filter-countries/issues) for support & suggestions.


## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/mJiyan/typescript-list-filter-countries/compare).