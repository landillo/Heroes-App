import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';



describe('pruebas en AppRouter', () => { 

    test('debe mostrar el login si no esta autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']} >
                <AuthContext.Provider value={ contextValue }>
                    < AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>

        );
        expect( screen.getAllByText('LoginPage').length ).toBe(1);
        // screen.debug();

     });
 })