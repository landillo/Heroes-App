import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';

describe('pruebas en Navbar', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Leonardo'
        },
        logout: jest.fn()
    }

    test('debe mosntrar el nombre del usuario', () => {

        render( 
            < AuthContext.Provider value={ contextValue }>
                < MemoryRouter>
                    < Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Leonardo' ) ).toBeTruthy();
        // screen.debug();

    });


    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => { 

        render( 
            < AuthContext.Provider value={ contextValue }>
                < MemoryRouter>
                    < Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
     });

     /*Faltó la pueba de navigate*/
    
 })