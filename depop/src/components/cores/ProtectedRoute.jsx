import { useLocation, useNavigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()

    let usersData = localStorage.getItem('dataUser')
    usersData = JSON.parse(usersData)
    const location = useLocation()
    const logedInProtectedPath = ['/login', '/register']

    if(usersData?.id && logedInProtectedPath?.includes(location?.pathname)) return navigate('/')

    return(
       <>
         {children}
       </>
    )
}

export default ProtectedRoute;