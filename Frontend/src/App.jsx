import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './components/shared/navigation/navigation'
import Authenticate from './pages/Authenticate/Authenticateredux'
import Activate from './pages/Activate/Activate'
import Rooms from './pages/Rooms/Rooms'
import { useSelector } from 'react-redux'
// const isAuthenticated = () => {
//   return false
// }
// const currentUser = {
//   activated: false
// }
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* guest routes */}
          <Route path='/' element={
            <GuestRoute>
              <Home />
            </GuestRoute>} />
          <Route path='/authenticate' element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>}>
          </Route>

          {/* semiprotectedroutes */}
          <Route path='/activate' element={<SemiProtectedRoute >
            <Activate />
          </SemiProtectedRoute>
          }>
          </Route>

          {/* protected routes */}
          <Route path='/rooms' element={<ProtectedRoute>
            <Rooms/>
          </ProtectedRoute>}>
          </Route>
          <Route path='*' element={<h1>404 Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

const GuestRoute = ({ children }) => {
  const {isAuth,user}=useSelector((state)=>state.auth)
  if (!isAuth) return children;
  if (isAuth && !user.activated)
    return <Navigate to="/activate" replace />;
  return <Navigate to="/rooms" replace />;
};

const SemiProtectedRoute = ({ children }) => {
    const {isAuth,user}=useSelector((state)=>state.auth)

  if (!isAuth) return <Navigate to="/authenticate" replace />;
  if (isAuth && !user?.activated) return children;
  return <Navigate to="/rooms" replace />;
};

const ProtectedRoute = ({ children}) => {
    const {isAuth,user}=useSelector((state)=>state.auth)

  if (!isAuth) return <Navigate to="/authenticate" replace />;
  if (isAuth && !user?.activated) return <Navigate to="/activate" replace />;
  return children;
}

export default App
