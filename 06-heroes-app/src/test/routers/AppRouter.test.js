import { AppRouter } from "../../components/routers/AppRouter"
import { mount }  from 'enzyme'
import { AuthContext } from "../../components/auth/authContext"
describe('pruebas sobre <AppRouter/>', () => {
    const contextValue = {
        user: {
            logged: false
        }
    }
    test('si el usuario no esta autenticado debe de mostrar el login ', () => {
        const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <AppRouter></AppRouter>
        </AuthContext.Provider>
        )
    })
    
})
