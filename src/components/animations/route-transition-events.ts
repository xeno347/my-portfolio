export const ROUTE_TRANSITION_START_EVENT = "sharaj-route-transition-start";

export type RouteTransitionStartDetail = {
  href: string;
};

export function dispatchRouteTransitionStart(detail: RouteTransitionStartDetail) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent<RouteTransitionStartDetail>(ROUTE_TRANSITION_START_EVENT, {
      detail,
    }),
  );
}
