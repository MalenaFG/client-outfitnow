import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/appRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AppRoutes />
    </div>
  )
}

export default App
