import { types } from "../../../src/auth"



describe('pruebas en "Types.js" ', () => { 

    test('debe regresar nuevos types', () => { 
        
        expect (types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
     });
 });