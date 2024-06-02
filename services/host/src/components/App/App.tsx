import { Link, Outlet } from "react-router-dom";
import {adminRoutes} from '@packages/shared/src/routes/admin'
import {shopRoutes} from '@packages/shared/src/routes/shop'

export const App = () => {

    return (
        <div data-testid={'App.DataTestId'}>
           <h1>ENTRY POINT</h1>
           <br />
           <Link to='/'>to Container</Link>
           <br />
           <Link to={adminRoutes.about}>to Admin</Link>
           <br />
           <Link to={shopRoutes.main}>to Shop</Link>
           <Outlet />
        </div>
    );
};

