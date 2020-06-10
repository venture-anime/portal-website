import Home from "Pages/Home";
import Staff from "Pages/Staff";
import About from "Pages/About";
import Rewards from "Pages/Rewards";

export const MAIN_PATH = "/";
export const ABOUT_PATH = "about";
export const CAST_PATH = "cast";
export const REWARDS_PATH = "rewards";

const routes = [
    { path: `${MAIN_PATH}${ABOUT_PATH}`, component: About },
    { path: `${MAIN_PATH}${CAST_PATH}`, component: Staff },
    { path: `${MAIN_PATH}${REWARDS_PATH}`, component: Rewards },
    { path: MAIN_PATH, component: Home },
];

export { routes };
