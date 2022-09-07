import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Message from "./Pages/Message";
import MyEventlist from "./Pages/MyEventlist";
import Notification from "./Pages/Notification";
import Category from "./Pages/Category";
import Setting from "./Pages/Setting";
import Help from './Pages/Help';
import DashboardDetail from './Pages/DashboardDetail';
import Login from './Pages/Login';
import GastMain from './Pages/GastMain';
import SignUp from './Pages/SignUp';
import Maps from './map/Maps';
import Init from './Pages/Init';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
  <BrowserRouter >
  <Routes>
    <Route path="/" element={<Init />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
     <Route path="/home" element={<Init />} />
     <Route path="/gastmain" element={<Init />}/>
     <Route path="/search" element={<Dashboard/>} />
     <Route path="/map" element={<Maps/>} />
     <Route path="/search/:Id" element={<DashboardDetail/>} />
     <Route path="/mylist" element={<MyEventlist/>} />
     <Route path="/message" element={<Message />} />
     <Route path="/notifications" element={<Notification/>} />
     <Route path="/setting" element={<Setting />} />
     <Route path="/help" element={<Help />} />
     <Route path="/category/:eid" element={<Category />} />
   
   </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

