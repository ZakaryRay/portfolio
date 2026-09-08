import React, { useState } from "react";
import Home from "./assets/pages/Home";
import { Outlet } from "react-router-dom";
import Header from "./assets/components_home/Header";
import Loading from "./components/Loading";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <Loading key="loading" onComplete={() => setLoading(false)} />
            ) : (
                <motion.div key="content">
                    <Header />
                    <Outlet />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default App;
