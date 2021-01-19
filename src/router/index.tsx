import { Router } from '@reach/router';

import Home from 'views/Home';
import Login from 'views/Login';

const ApplicationRouter = () => (
  <Router>
    <Home path="/" />
    <Login path='/login' />
  </Router>
);

export default ApplicationRouter;