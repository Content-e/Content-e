import { FC, useContext, useEffect } from "react";
import { HomePage } from "components";
import { TitleContext } from "state/auth";

export const MainPage: FC = () => {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Home");
  }, []);
  return <HomePage />;
};

export default MainPage;
