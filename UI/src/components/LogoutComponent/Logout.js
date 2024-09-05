import { Navigate } from 'react-router-dom';

function Logout()
{
    localStorage.removeItem('token')
    localStorage.removeItem('_id')
    localStorage.removeItem('email')	  
    localStorage.removeItem('role')
    
    return(
        <>
            <Navigate to='/login' />
        </>
    )
}

export default Logout