import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './components/shared/navigation/navigation'
import Authenticate from './pages/Authenticate/Authenticate'
import Activate from './pages/Activate/Activate'
import Rooms from './pages/Rooms/Rooms'

const isAuthenticated = () => {
  return false
}
const currentUser = {
  activated: false
}
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
          <Route path='/activate' element={<SemiProtectedRoute user={currentUser}>
            <Activate />
          </SemiProtectedRoute>
          }>
          </Route>

          {/* protected routes */}
          <Route path='/rooms' element={<ProtectedRoute user={currentUser}>
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
  if (!isAuthenticated()) return children;
  if (isAuthenticated() && !currentUser.activated)
    return <Navigate to="/activate" replace />;
  return <Navigate to="/rooms" replace />;
};

const SemiProtectedRoute = ({ children, user }) => {
  if (!isAuthenticated()) return <Navigate to="/authenticate" replace />;
  if (isAuthenticated() && !user?.activated) return children;
  return <Navigate to="/rooms" replace />;
};

const ProtectedRoute = ({ children, user }) => {
  if (!isAuthenticated()) return <Navigate to="/authenticate" replace />;
  if (isAuthenticated() && !user?.activated) return <Navigate to="/activate" replace />;
  return children;
}

export default App
