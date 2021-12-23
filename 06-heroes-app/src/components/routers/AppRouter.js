import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../login/LoginScreen';
import { Navbar } from '../ui/Navbar';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRouter>
                            <LoginScreen />
                        </PublicRouter>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRouter>
                            <DashboardRoutes></DashboardRoutes>
                        </PrivateRouter>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
