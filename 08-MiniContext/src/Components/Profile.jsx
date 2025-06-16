import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
     
    if (!user) {
        return <div>please Login</div>
    }
    return <div>Welcome {user.username || 'User'}</div>
}

export default Profile
