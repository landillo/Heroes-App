import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRouter = ({ children }) => {
  const { logged } = useContext(AuthContext); //sacamos el value de logged del useContext( AuthContext )

  const { pathname, search } = useLocation(); //En esta parte memorizamos la ultima pagina donde estuvo el usuario
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath); //antes de darle logout (leer => lastPath)

  return logged ? ( //(1)
    children //(2)
  ) : (
    <Navigate to={"/login"} />
  ); //(3)
};

/* ya que tenemos el value del logged que sacamos del AuthContext retornamos una validacion:
    si logged es true (1) mostramos el children (2) caso contrario, mandamos a la pagina de login(3) */

/*lastPath: primero usamos el useLocation para sacar los valores del path y de los query params que se usaron en dicha
    path luego los agregamos a una constante concatenandolos y por utltimo lls guardamos en el local storage */
