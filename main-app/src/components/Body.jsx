
import React from 'react';
import Home from '../pages/Home';
import Favorit from '../pages/Favorit';
import WatchList from '../pages/WatchList';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div id="body-wrapper">
           <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/favorit" element={<Favorit />} />
                <Route path="/watch-list" element={<WatchList />} />
            </Routes>
        </div>
    );
}

export default Body;