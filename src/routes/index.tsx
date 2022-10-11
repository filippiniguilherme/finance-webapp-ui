import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './config';

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
        {routes.map((routeItem) => {
            console.log(routeItem)
            return (
              <Route
                  key={routeItem.component}
                  path={routeItem.path}
                  // exact={routeItem.exact}
                  component={lazy(() => import(`../pages/${routeItem.component}`))}
              />
            );
        })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;