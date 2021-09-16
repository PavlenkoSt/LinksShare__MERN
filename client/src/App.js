import useRoutes from "./routes"
import AuthContext from "./context/AuthContext"
import useAuth from "./hooks/useAuth"
import Navbar from "./components/Navbar"
import 'materialize-css'


const App = () => {

    const { token, userId, login, logout } = useAuth()

    const isAuth = !!token

    const router = useRoutes(isAuth)

    return (
        <AuthContext.Provider value={{ token, userId, login, logout, isAuth }}>
            { isAuth && <Navbar/> }
            <div className='container'>
                { router }
            </div>
        </AuthContext.Provider>
    )
}

export default App
