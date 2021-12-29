'use strict';
const routesCountries = require('./countriesRoutes');


module.exports = app => {
    routesCountries(app);
};