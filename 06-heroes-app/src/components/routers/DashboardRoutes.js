import { Navbar } from "../ui/Navbar"
import { Routes, Route } from "react-router-dom";
import { DcScreen } from '../dc/DcScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../search/SearchScreen';
import {  HeroScreen } from "../hero/HeroScreen";
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} />
                </Routes>
            </div>
        </>
    )
}
