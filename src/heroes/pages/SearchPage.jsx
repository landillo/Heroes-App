import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { q = '' } = queryString.parse( location.search );// instalamos query-string para poder usarlo para separar
  // los datos del query se importa y se puede usar, se desestructura y se toma solo la q si no hay seria una
  // string vacio.

  const heroes = getHeroesByName( q );

  const showSearch = ( q.length === 0 ); //este variable es para aparecer y desaparecer el cuadro de sherch a hero
  const showError = ( q.length > 0 ) && heroes.length === 0; //este variable es para validar cuando no exita el hero que se busca y aparesca el error


  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = ( event ) => {
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return; *lo quitamos paraque funciones lo del display none *
    //con esto validamos que el buscador tenga mas de 1 caracter

    navigate(`?q=${ searchText.toLowerCase().trim() }`); //aqui agregamos el queryParameter en el path, se usa el .trim() para 
                                    //eliminar los espacios adelante y atras y el .toLowerCase para convertir
                                    //los caracteres a minisculas 

    console.log({ searchText });
  }


  return (
    <>
      <h1>Search</h1>
      <hr />
    <div className='row'>

      <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={ onSearchSubmit } >
          <input 
            type="text"
            placeholder='Search a Hero'
            className='form-control' 
            name='searchText'
            autoComplete='off'
            value={ searchText }
            onChange={ onInputChange}

            />

            <button className='btn btn-outline-primary mt-2'>
              Search
            </button>
        </form>
      </div>

      <div className='col-7'>
        
        <h4>Results</h4>
        <hr />
        {/* {
          ( q === '' )
          ? <div className='alert alert-primary'>
              Search a Hero
            </div>
          : ( heroes.length === 0 ) 
            && <div className='alert alert-danger'>
                  Hero <b>{ q }</b> don´t exis t
               </div>
        } */}


        <div className='alert alert-primary animate__animated animate__fadeIn' style={{ display: showSearch ? '' : 'none' }}>
          Search a Hero
        </div>

        <div className='alert alert-danger animate__animated animate__fadeIn' style={{ display: showError ? '' : 'none' }}>
          Hero <b>{ q }</b> don´t exis t
        </div>

        {
          heroes.map( hero => (
            <HeroCard key={ hero.id } { ...hero } />
          ))
        }

      </div>

    </div>
    
    
    </>
  )
}
