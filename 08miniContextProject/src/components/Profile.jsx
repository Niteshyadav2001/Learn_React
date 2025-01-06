import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  // always check whether the user is empty or not, because if it is empty we can't extract values from them by using terms like "user.userName"
  // here user is already empty, how can we extract some values from it

  if(!user) return <div>Please Login</div>

  // console.log(user)
  return (
    <div>Profile : {user.userName} <b/> Password : {user.password}</div>
  )
}

export default Profile