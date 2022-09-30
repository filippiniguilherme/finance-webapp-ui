import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import routes from './config';

const Router = () => {
  return (
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
  );
};

export default Router;