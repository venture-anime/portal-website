import Home from 'Pages/Home';
import Staff from 'Pages/Staff';
import About from 'Pages/About';
import Rewards from 'Pages/Rewards';
import paths from './paths';

const routes = [
    { path: paths.about, component: About },
    { path: paths.staff, component: Staff },
    { path: paths.rewards, component: Rewards },
    { path: paths.index, component: Home },
];

export default routes;
