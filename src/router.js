import { useRoutes } from 'react-router-dom'
import Login from './pages/login'

const Router = () => {
    const Route = useRoutes([
        {
            path:'/',
            element: <Login/>
        },{
            path:'/login',
            element: <Login/>
        }
    ])
    return Route
}


export default Router