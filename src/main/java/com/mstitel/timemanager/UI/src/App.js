import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Signup/Registration'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Task from './components/Task/Task'
import { AppProvider } from './AppContext';

function App() {
    return(
     <AppProvider>
      <div>
        <Routes>
          <Route path= "/home" 
            element={ 
              <PrivateRoute>
                <Home/>
              </PrivateRoute>
            } 
          >
          </Route>
          <Route path= "/login" element={ <Login/> }/>
          <Route path= "/signup" element= { <Registration/> }/>
          <Route path="/task" element={<PrivateRoute> <Task /> </PrivateRoute>} />
        </Routes>
      </div>
    </AppProvider> 
    )
}

export default App
