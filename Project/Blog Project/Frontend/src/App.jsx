import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import AddAdmin from './components/AddAdmin'
import ViewAdmin from './components/ViewAdmin'
import EditAdmin from './components/EditAdmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={Layout} />
        <Route path='/addAdmin' Component={AddAdmin}></Route>
        <Route path='/viewAdmin' Component={ViewAdmin}></Route>
        <Route path='/editAdmin' Component={EditAdmin}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
