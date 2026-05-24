import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Splash from './pages/Splash'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw'
import History from './pages/History'
import Profile from './pages/Profile'

function PrivateRoute({ children }) {

  const token = localStorage.getItem('token')

  return token
    ? children
    : <Navigate to='/login' />

}

export default function App() {

  const token = localStorage.getItem('token')

  return (

    <BrowserRouter>

      <Routes>

        {/* SPLASH */}

        <Route
          path='/'
          element={<Splash />}
        />

        {/* LOGIN */}

        <Route
          path='/login'
          element={
            token
              ? <Navigate to='/dashboard' />
              : <Login />
          }
        />

        {/* REGISTER */}

        <Route
          path='/register'
          element={
            token
              ? <Navigate to='/dashboard' />
              : <Register />
          }
        />

        {/* DASHBOARD */}

        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* DEPOSIT */}

        <Route
          path='/deposit'
          element={
            <PrivateRoute>
              <Deposit />
            </PrivateRoute>
          }
        />

        {/* WITHDRAW */}

        <Route
          path='/withdraw'
          element={
            <PrivateRoute>
              <Withdraw />
            </PrivateRoute>
          }
        />

        {/* HISTORY */}

        <Route
          path='/history'
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />

        {/* PROFILE */}

        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )

}