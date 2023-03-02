import { startCase } from "lodash";
import { AuthRoutes, IErrorStateType, UnAuthRoutes } from "utils";

export const matchSlugUrls = (pathname: string, route: string): boolean => {
  if (!route.includes(":")) return pathname === route;
  const routeArr = route.split("/");
  const pathArr = pathname.split("/");
  if (routeArr.length !== pathArr.length) return false;
  for (const idx in routeArr) {
    if (routeArr[idx].includes(":")) {
      if (!pathArr[idx]?.length) return false;
      routeArr.splice(Number(idx), 1);
      pathArr.splice(Number(idx), 1);
    }
  }
  return pathArr.join("/") === routeArr.join("/");
};

export const isValidRoute = (
  routesArray: Array<string>,
  currentPathname: string
): boolean => {
  if (routesArray.includes(currentPathname)) return true;
  const sluggedRoutes = routesArray.filter((route) => route.includes(":"));
  // eslint-disable-next-line guard-for-in
  for (const idx in sluggedRoutes) {
    const isMatched = matchSlugUrls(currentPathname, sluggedRoutes[idx]);
    if (isMatched) return true;
  }
  return false;
};

export const updateErrorState = (
  data: IErrorStateType,
  setErrorState: React.Dispatch<React.SetStateAction<IErrorStateType[]>>
): void =>
  setErrorState((current) => [
    ...current,
    { id: Math.floor(Math.random() * 100), ...data },
  ]);

export const isEmptyString = (input?: string | null): boolean =>
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  !input || !input.replace(/<\/?[^>]+(>|$)/g, "").length;

export const getPageTitle = (path: AuthRoutes): string =>
  startCase(path.split("/")?.[1]);

export const replaceSubPath = (path: UnAuthRoutes): string => {
  const desiredPathElems = path.split("/");
  const actualPathElems = window.location.pathname.split("/");
  if (desiredPathElems.length !== actualPathElems.length) return path;

  const updatedPathElems = desiredPathElems.map((e, index) => {
    if (e.includes(":")) return actualPathElems[index];
    return e;
  });

  console.log(updatedPathElems);
  return updatedPathElems.join("/");
};
