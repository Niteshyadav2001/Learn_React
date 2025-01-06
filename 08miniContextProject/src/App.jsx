import './App.css'
import Input from './components/Input'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h2>This is a mini react Provides which helps in understanding the use of useContext.</h2>
      <Input />
      <Profile />
    </UserContextProvider>
  )
}

export default App
