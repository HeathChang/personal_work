import React, { Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import RouterView from './Router/index'

// const _ = React.lazy(() => import(''))

function App() {
  return (
      <RouterView/>
  );
}

export default App;
