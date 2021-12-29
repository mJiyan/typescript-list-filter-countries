import { Countries, Country } from '../views';
import IRoute from '../models/route';

const routes: IRoute[] = [
    { path: '/', name: "Country List Page", component: Countries, exact: true },
    { path: '/name/:name', name: "Country Detail Page", component: Country, exact: true },
];

export default routes;