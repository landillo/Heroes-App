
import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse( localStorage.getItem( 'user' ));

  return {
    logged: !!user,
    user: user,
  }
}


export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

   // Funcion de Login.. esa funcion se manda llamar en LoginPage y ahi recibe el name como argumento
    const login = ( name = '' ) => {
      
      const user = { id: 'ABC', name }; //creamos el user con id y el name
      const action = { type: types.login, playload: user } //creamos el action para el use reducer diciendo que 
      //es de tipo login y el playload es el user que ya establecimos 

      localStorage.setItem('user', JSON.stringify( user ) ); //guardamos el user en el localStorage para no
      //perderlo despues de recargar la pagina

      dispatch( action );// mandamos llamar el dispatch para que haga el logeo
    };

    //Funcion de Logout.. practicamente lo que hace es limpiar el localStorage
    const logout = () => {
      localStorage.removeItem('user');//quita al user del localStorage
      const action = { type: types.logout };//indicamos que el action es de tipo logout

      dispatch( action ); // mandamos llamar el dispatch con el action de logout 
    }
  
    return (
   <AuthContext.Provider value={{
      ...authState,

      //Methods
        logout,
        login,
    }}>
        { children }
    </AuthContext.Provider>
  );
}

/* este componente provee el contexto a toda la aplicacion recibimos en las props todos los 
componentes hijos agregando un value al componente, que si aun no lo tenemos lo podemos dejar 
como un objeto vacio,  con esto proveemos a la aplicacion de contexto */
