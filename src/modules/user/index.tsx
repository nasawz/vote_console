import * as React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/login';
import './styles';

export interface PageProps {}

export default function Page({ match }) {
  return (
    <div>
      <Route path={`${match.url}/login`} component={Login} />
    </div>
  );
}
