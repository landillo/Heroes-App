import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {
   
    const { user, logout } = useContext( AuthContext ); //desestructuramos el user y el logout para el inicio
    //y cierre de sesion respectivamente 

    const navigate = useNavigate();
    
    
    const onLogout = () => {

        logout(); //mandamos llamar el cierre de sesion del authprovider

        navigate('/login', { // nos manda a la pantalla de LoginPage 
            replace: true
        })
    }
   
   
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive}) =>  `nav-item nav-link ${isActive ? 'active' : '' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive}) =>  `nav-item nav-link ${isActive ? 'active' : '' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({ isActive}) =>  `nav-item nav-link ${isActive ? 'active' : '' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                    {/* <NavLink 
                        className={({ isActive}) =>  `nav-item nav-link ${isActive ? 'active' : '' }` }
                        to="/hero"
                    >
                        Hero
                    </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info' >
                        { user?.name }
                    </span>

                    <button
                    className='nav-item nav-link btn'
                    onClick={ onLogout }
                    >
                        Logout
                    </button>
                   
                </ul>
            </div>
        </nav>
    )
}