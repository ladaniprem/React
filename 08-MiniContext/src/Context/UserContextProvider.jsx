import React from 'react'
import { UserContext } from './UserContext'
  const UserContextProvider =({children}) => {
 const [user, setUser] = React.useState(null);
    return(
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider

// childern is generic name jo bi ata hai use as it pass kardo.
// as koy necessary nahi hai ki children hi pass ho.
