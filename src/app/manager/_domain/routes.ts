export type ManagerRoute = {
  name: string;
  path: string;
  childRoutes?: ManagerRoute[];
};

export type BreadcrumbSegment = {
  level: number;
  activeRoute: ManagerRoute;
  siblingRoutes: ManagerRoute[];
};

export const routes: ManagerRoute[] = [
  {
    name: "Manager",
    path: "/manager",
    childRoutes: [
      {
        name: "Locations",
        path: "/manager/locations",
        childRoutes: [{ name: "Add location", path: "/manager/locations/add" }],
      },
      {
        name: "Widgets",
        path: "/manager/widgets",
        childRoutes: [
          { name: "Add widget", path: "/manager/widgets/add" },
          {
            name: "Subwidgets",
            path: "/manager/widgets/subwidgets",
            childRoutes: [
              { name: "Add subwidget", path: "/manager/widgets/subwidgets/add" },
            ],
          },
        ],
      },
    ],
  },
];

export function findRoute(
  pathname: string,
  routesList: ManagerRoute[] = routes,
): ManagerRoute | undefined {
  for (const route of routesList) {
    if (route.path === pathname) {
      return route;
    }
    if (route.childRoutes) {
      const foundRoute = findRoute(pathname, route.childRoutes);
      if (foundRoute) {
        return foundRoute;
      }
    }
  }
  return undefined;
}

export function buildBreadcrumbs(pathname: string): BreadcrumbSegment[] {
  const segments: BreadcrumbSegment[] = [];
  const pathParts = pathname.split("/").filter((part) => part !== "");

  let currentPath = "";
  let currentRoutes = routes;

  for (let i = 0; i < pathParts.length; i++) {
    currentPath += `/${pathParts[i]}`;
    const activeRoute = findRoute(currentPath, currentRoutes);

    if (activeRoute) {
      let siblingRoutes: ManagerRoute[] = [];
      if (i > 0) {
        // Find the parent route to get sibling routes
        const parentPath = currentPath.substring(
          0,
          currentPath.lastIndexOf("/"),
        );
        const parentRoute = findRoute(parentPath);
        if (parentRoute?.childRoutes) {
          siblingRoutes = parentRoute.childRoutes.filter(
            (route) => route.path !== activeRoute.path,
          );
        }
      } else {
        siblingRoutes = routes.filter(
          (route) => route.path !== activeRoute.path,
        );
      }

      segments.push({
        level: i,
        activeRoute,
        siblingRoutes,
      });

      if (activeRoute.childRoutes) {
        currentRoutes = activeRoute.childRoutes;
      } else {
        currentRoutes = [];
      }
    }
  }

  return segments;
}
