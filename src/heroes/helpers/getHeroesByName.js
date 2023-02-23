import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => { //se recibe el name, si no lo rcibe es igual a un string vacio...

    name = name.toLocaleLowerCase().trim(); //primero pasamos el valor del name a minisculas(.toLocalLowerCase) y eliminamos los
                                            // espacios en blanco (.trim) para poder validar 

    if ( name.length === 0 ) return []; //validamos si el .length es 0 regresamos un arreglo vacio. quiere decir que no se escribio nada 

    return heroes.filter(   
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    );
    //luego pasamos in filter para filtrar el hero que pasamos a minisculas y en el hero.superhero que incluya el name
    //es el valor que se retorna 

}