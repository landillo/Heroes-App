import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PublicRouter } from '../../src/router/PublicRouter.';



describe('pruebas en PublicRouter', () => { 

    test('debe mostrar el children si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render (
            <AuthContext.Provider value={ contextValue }>
                <PublicRouter>
                    <h1>Ruta Publica</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica') ).toBeTruthy(); 
        // screen.debug();
         
     });

     test('debe navegar si esta autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Leonardo'
            }
        }

        render (
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                              <PublicRouter>
                                <h1>Ruta Publica</h1>
                              </PublicRouter>
                        } />
                        <Route path='marvel' element={ <h1>Página de marvel</h1>} />
                    </Routes>  
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página de marvel')).toBeTruthy();

      })

 })