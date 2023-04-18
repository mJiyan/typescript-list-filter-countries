import { CountryDetailsPage, CountryListPage } from 'src/pages';

type RouteProps = {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}

const routes: RouteProps[] = [
    { path: '/', name: "Country List Page", component: CountryListPage, exact: true },
    { path: '/:templateName', name: "Country List Page", component: CountryListPage, exact: true },
    { path: '/name/:name', name: "Country Detail Page", component: CountryDetailsPage, exact: true },
    { path: '/:templateName/name/:name', name: "Country Detail Page", component: CountryDetailsPage, exact: true },
];

export default routes;
