import useRoutes from "./routes"


const App = () => {
    
    const router = useRoutes(true)

    return (
        <div className='container'>
            { router }
        </div>
    )
}

export default App
