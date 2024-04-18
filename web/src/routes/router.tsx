import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Loading, } from '../pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loading />} />
                <Route path="/home" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}