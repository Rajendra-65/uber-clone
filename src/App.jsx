import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import UserProtectorWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectorWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'

const App = () =>{
  return(
    <div className=''>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/riding' element={<Riding/>}/>
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain/signup' element={<CaptainSignup/>} />
        <Route path='/captain/login' element={<CaptainLogin/>} />
        <Route path='/home' element={
            <UserProtectorWrapper>
              <Home/>
            </UserProtectorWrapper>
          } 
        />
        <Route 
          path='/user/logout' 
          element = {<UserProtectorWrapper>
              <UserLogout/>
            </UserProtectorWrapper>}
        />
        <Route path='/captain-home' element={
          <CaptainProtectorWrapper>
            <CaptainHome/>
          </CaptainProtectorWrapper>
        }/>
      </Routes>
    </div>
  )
}

export default App