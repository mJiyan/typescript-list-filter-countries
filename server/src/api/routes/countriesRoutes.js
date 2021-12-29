'use strict';

module.exports = (app) => {
    const countriesFunctions = require('../controllers/countriesController');
    app.route('/all')
        .get(countriesFunctions.list_countries);

    app.route('/alpha/:alpha')
        .get(countriesFunctions.get_country_by_alpha);

    app.route('/name/:name')
        .get(countriesFunctions.get_country_by_name);

}