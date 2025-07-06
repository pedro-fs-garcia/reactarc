import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}