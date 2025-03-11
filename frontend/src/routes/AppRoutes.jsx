import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/private" element={<PrivateRoutes />} />
        </Routes>
    );
};

export default AppRoutes;