import useRoutes from "./routes"
import 'materialize-css'

const App = () => {
    
    const router = useRoutes(false)

    return (
        <div className='container'>
            { router }
        </div>
    )
}

export default App
