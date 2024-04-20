import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Home, Loading, } from '../pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/*" element={<Loading />} />
                <Route path="/home" element={<Home />} />
                <Route path="/error" element={<Error />} />

            </Routes>
        </BrowserRouter>
    )
}