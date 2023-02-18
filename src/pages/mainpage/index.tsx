import { FC, useContext, useEffect } from "react";
import { getPageTitle, HomePage } from "components";
import { TitleContext } from "state/auth";
import { useLocation } from "react-router-dom";
import { AuthRoutes } from "utils";

export const MainPage: FC = () => {
  const { pathname } = useLocation();
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(getPageTitle(pathname as AuthRoutes));
  }, []);

  return <HomePage />;
};

export default MainPage;
