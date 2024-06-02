import {Outlet} from "react-router-dom";
import {deepMerge} from '@packages/shared/src/utils/deepMerge'

export const App = () => {

    deepMerge()

    return (
        <div data-testid={'App.DataTestId'}>
            <h1>ADMIN MODULE</h1>
            <Outlet />
        </div>
    );
};

