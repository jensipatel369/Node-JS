import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Register from './components/Register'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </BrowserRouter>
  )
}