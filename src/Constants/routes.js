import Home from "Pages/Home";
import Staff from "Pages/Staff";
import About from "Pages/About";
import Rewards from "Pages/Rewards";

export const paths = {
    about: '/about',
    staff: '/cast',
    rewards: '/rewards',
    index: '/',
};

const routes = [
    { path: paths.about, component: About },
    { path: paths.staff, component: Staff },
    { path: paths.rewards, component: Rewards },
    { path: paths.index, component: Home },
];

export { routes };
