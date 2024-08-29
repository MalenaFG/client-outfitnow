import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import SideBar from './components/SideBar/SideBar'
import Logo from './components/Logo/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

      <SideBar />
      <Logo />
      <AppRoutes />
    </div>
  )
}

export default App
