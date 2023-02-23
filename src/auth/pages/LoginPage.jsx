import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  
  
  const { login } = useContext( AuthContext );
  const navigate = useNavigate() ;
  
    
    const onLogin = () => {

      const lastPath = localStorage.getItem( 'lastPath' ) || '/'; //sacamos el valor de que guardamos en el localStorage de lastPath y
      //si no hay nada lo mandamos a /, por que ese valor se lo agregamos al navigate que esta mas abajo

      login('Orlando Ledón');

        navigate( lastPath, { // aqui agregamos el valos que nos de en lastPath ya antes memorizado o en caso de no haber mandar al home
            replace: true
        })
      }

  
  return (

    <div className='container mt-5'> 
      <h1>LoginPage</h1>
      <hr />
      
      <button
       className='btn btn-primary'
       onClick={ onLogin }
       >
        Login
      </button>

    </div>
  )
}
