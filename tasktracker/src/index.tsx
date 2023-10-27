import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/main.scss';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layouts';

import { SignIn } from './pages/sign-in';
import {TaskList} from './pages/task-list/taskList';
import App from './App';
import { AuthProvider } from './context/authProvider';
import { LogOut } from './pages/log-out';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HashRouter>
    <Routes>
      <Route path='/' element={<App />}/>

      <Route path='/auth/sign-in' element={<AuthProvider><SignIn /></AuthProvider>}/>
      <Route path='/tasks' element={<TaskList />}/>
      <Route path='/logout' element={<LogOut />}/>
      
    </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
