import React from "react";
import Home from "./assets/pages/Home";
import { Outlet } from "react-router-dom";
import Header from "./assets/components_home/Header";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default App;
