import Home from 'Pages/Home';
import Credits from 'Pages/Credits';
import About from 'Pages/About';
import Rewards from 'Pages/Rewards';
import { paths, redirect_paths } from './paths';
import Episodes from '../Pages/Episodes/Episodes';
import Blog from '../Pages/Blog/Blog';

const redirect_routes = [{ from: redirect_paths.cast, to: paths.credits }];

const routes = [
    { path: paths.about, component: About },
    { path: paths.credits, component: Credits },
    { path: paths.episodes, component: Episodes },
    { path: paths.blog, component: Blog },
    { path: paths.rewards, component: Rewards },
    { path: paths.index, component: Home },
];

export { redirect_routes, routes };
