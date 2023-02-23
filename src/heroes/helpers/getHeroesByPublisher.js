import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = [ 'DC Comics', 'Marvel Comics' ];        //se esta validando si el publisher existe, empezando por el error,
    if ( !validPublisher.includes( publisher ) ) {                  //usamos una negacion para validar si no es valido el publisher 
        throw new Error(`${publisher} is not a valid publisher`);  //y si se cumple la condicion tiramos un error, si no, filtramos las
                                                                    //coincidencias 
    }

    return heroes.filter( heroe => heroe.publisher === publisher );  //aqui filtramos los heroes que tengan el publisher una vez que se valida
}