import Dashboard from "../../features/Dashboard/Dashboard";
import HelpPage from '../../features/Help/HelpPage';

const routes = [
    { path: '/', exact: true, component: Dashboard},
    { path: '/help', component: HelpPage}
]

export default routes;