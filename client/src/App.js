import useRoutes from "./routes"
import AuthContext from "./context/AuthContext"
import 'materialize-css'
import useAuth from "./hooks/useAuth"

const App = () => {

    const { token, userId, login, logout } = useAuth()

    const isAuth = !!token

    const router = useRoutes(isAuth)

    return (
        <AuthContext.Provider value={{ token, userId, login, logout, isAuth }}>
            <div className='container'>
                { router }
            </div>
        </AuthContext.Provider>
    )
}

export default App
