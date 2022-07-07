import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchPage from './pages/SearchPage/SearchPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Details from './pages/Detail/Details';
import Admin from './pages/Admin/Admin';
import Single from './pages/Single/Single';
import List from './pages/List/List';
import ListHotel from './pages/List hotel/List';
import New from './pages/New/New';
import NewHotel from './pages/New hotel/NewHotel';
import { productInputs, userInputs, hotelInputs } from "./formSource";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';

import { hotelColumns, roomColumns, userColumns } from "./datatablesource";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        
          <Header />

          <Routes>
            <Route exact path="/Admin" element={<Admin />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="users">
              <Route
                index
                element={
                  
                    <List columns={userColumns} />
                 
                }
              />
              <Route
                path=":userId"
                element={
                  
                    <Single />
                 
                }
              />
              
            </Route>
            <Route path="hotels">
            <Route
                path="new"
                element={
                  
                    <NewHotel inputs={hotelInputs} title="Add New hotel" />
                 
                }
              />
              <Route
                index
                element={
                  
                    <ListHotel columns={hotelColumns} />
                 
                }
                
              />
              <Route
                path=":productId"
                element={
                  
                    <Single />
                 
                }
              />
              
              <Route
                path=":productId"
                element={
                  
                    <Single />
                 
                }
              />
              
            </Route>
            <Route exact path="/Details" element={<Details />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Search" element={<SearchPage />} />
            <Route exact path="/" element={<Home />} />
          </Routes>

          <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
