import { authReducer } from "../../components/auth/authReducer"
import { types } from "../../components/types/types"
describe('Pruebas sobre authReducer', () => {
    test('debe de retornar el estado por defecto ', () => {
        const state = authReducer({ logged: false }, {})
        console.log(state)
        expect(state).toEqual({ logged: false })
    })
    test('debe de autenticar y colocar el "name" del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Cristopher'
            }
        }
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            name: 'Cristopher'
        })
    })
    test('debe de borrar el "name" del usuario y el logged en false', () => {
        const action = {
            type: types.logout
        }
        const state = authReducer({ logged: true, name: 'Cristopher' }, action)
        console.log(state)
        expect(state).toEqual({ logged: false })
    })
    
    
    
})
