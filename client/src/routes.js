import react from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'


const useRoutes = isAuth => {
    if(isAuth){
        return (
            <Switch>
                <Route path='/create' exact>
                    <CreatePage/>
                </Route>
                <Route path='/links' exact>
                    <CreatePage/>
                </Route>
                <Route path='/detail/:id'>
                    <DetailPage/>
                </Route>
                <Redirect to='/create' />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/' exact>
                <AuthPage/>
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default useRoutes