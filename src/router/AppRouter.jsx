import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRouters } from "../heroes/router/HeroesRouters";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter.";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/*Rutas Publicas, son las rutas que queremos que se muestren cuando
              no esta autenticado el usuario, y se hacen en el PublicRouter y se ejecutan
              asi  */}
        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />

        {/*Rutas Privadas, son las rutas que queremos que se muestren cuando
              no esta autenticado el usuario, y se hacen en el PrivateRouter y se ejecutan
              asi  */}
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRouters />
            </PrivateRouter>
          }
        />

        {/* <Route path="login" element={ <LoginPage /> } /> */}
        {/* <Route path="/*" element={ <HeroesRouters /> } /> */}
      </Routes>
    </>
  );
};
