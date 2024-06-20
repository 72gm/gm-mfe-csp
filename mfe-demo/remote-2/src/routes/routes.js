import React from 'react'
const Component3 = React.lazy(() => import('../components/component3'));
const Component4 = React.lazy(() => import('../components/component4'));

const cavRoutes = [
  {
    header: 'Rmt2 Component 3',
    routeUri: '/remote2/component3',
    component: <Component3 />
  },
  {
    header: 'Rmt 2 Component 4',
    routeUri: '/remote2/component4',
    component: <Component4 />
  },
];

export default cavRoutes;
