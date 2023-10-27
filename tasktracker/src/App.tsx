import React, { useState } from 'react';
import './App.scss';

import { Layout } from './components/layouts';
import { AuthContext } from './context/authContext';
import { AuthProvider } from './context/authProvider';
import { Outlet } from 'react-router-dom';


function App() {

  
  return (
    <>
      <AuthProvider>
         <Layout />
      </AuthProvider>
      <Outlet />
    </>
  );
}

export default App;
