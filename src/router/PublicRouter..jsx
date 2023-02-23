import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../auth';




export const PublicRouter = ({ children }) => {

    const { logged } = useContext( AuthContext ); //sacamos el value de logged del useContext( AuthContext )

  return ( !logged )//(1)
        ? children //(2)
        : <Navigate to={ '/marvel' } />//(3)
}

/* Estamos usando lo mismo que en el PrivateRputer pero en este caso validamos la negacion del logged (1),
si es true mostramos el children (2) y caso contrario mandamos a la pagina de marvel(3)*/