import { Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from './config/routes';
import { Header } from './modules';
import { history } from './Store'

const App = () => {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component name={route.name} {...props} {...route.props} />
                )}
              />
            );
          })}
        </Switch>
      </Router>
    </>
  );
};

export default App;
