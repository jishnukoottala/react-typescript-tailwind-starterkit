import React, { ReactElement, ReactNode } from "react"
import { Route, Switch } from "react-router-dom"
import Dashboard from "Container/Dashboard"
import About from "Container/About"
import NoMatch from "Views/NoMatch"

const routesArr = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/about",
    component: About,

    // routes: [
    //   { uncomment for sub routes
    //     path: "/tacos/bus",
    //     component: Bus,
    //   },
    //   {
    //     path: "/tacos/cart",
    //     component: Cart,
    //   },
    // ],
  },
  {
    path: "*",
    component: NoMatch,
  },
]

type RouteType = {
  path: string
  exact?: boolean
  component: ReactNode
  routes?: SubRouteType[]
}

type SubRouteType = {
  path: string
  component: ReactNode
}

const RouteWithSubRoutes: React.FC<RouteType> = (
  route,
): ReactElement => {
  return (
    <Route
      path={route.path}
      exact={true}
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

const Routes: React.FC = () => {
  return (
    <Switch>
      {routesArr.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  )
}

export default Routes
