import HomePage from '../containers/HomePage';

type routePath = {
    path: string;
    component: React.ComponentType<any>;
};
const routes: Array<routePath> = [
    {
        path: '/',
        component: HomePage,
    },
];

export default routes;
