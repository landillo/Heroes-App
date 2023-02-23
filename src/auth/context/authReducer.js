import { types } from "../types/types";

export const authReducer = ( state = { }, action ) => {


    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.playload,
            };

        case types.logout:
            return {
                logged: false,
            };


        default:
            return state;

    }
}

/* creamos esta funcion que recibe 2 argumentos, el state y la accion (las acciones contienen 2 elementos
    el type y el playload que este ultimo no necesariamente va siempre ), usamos un switch por que podemos agregar
    mas opciones mas adelante en la app, estamos regresando 2 acciones en el switch el type login y el type logout
    donde en login regresamos la desestructuracion del esado anterior para no perder cosas necesarias o utiles 
    para el usuario y cambiamos lo que necesitamos, en este caso logged: true y name: action.playload y en 
    el caso de logout cabiamos logged: false, en caso de no tener ninguna de esas acciones des regresa el
    state como estaba. */