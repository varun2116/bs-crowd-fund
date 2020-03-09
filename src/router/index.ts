import HomePage from '../containers/HomePage';
import DetailsPage from '../containers/DetailsPage';
import PaymentPage from '../containers/PaymentPage';

type routePath = {
    path: string;
    component: React.ComponentType<any>;
};
const routes: Array<routePath> = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/details',
        component: DetailsPage,
    },
    {
        path: '/payment',
        component: PaymentPage,
    },
];

export default routes;
