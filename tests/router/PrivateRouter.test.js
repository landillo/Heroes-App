import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRouter } from "../../src/router/PrivateRouter";


describe('Pruebas en PrivateRouter', () => { 

    test('debe mostrar el children si esta autenticado', () => { 

       Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Leonardo'
            }
        }

        render (
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <PrivateRouter>
                        <h1>Ruta Privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada') ).toBeTruthy(); 
        expect( localStorage.setItem ).toHaveBeenCalled();
     });
 })