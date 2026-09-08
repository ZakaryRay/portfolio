import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

const Loading = ({ onComplete }) => {
    return (
        <motion.div
            className="flex flex-col justify-center items-center h-screen gap-4"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}>
            <h1 className="text-3xl text-center font-semibold tracking-wide">Chargement</h1>
            <div className="text-5xl font-bold tabular-nums">
                <CountUp from={0} to={100} delay={1} duration={2.5} onEnd={onComplete} />
                <span>%</span>
            </div>
        </motion.div>
    );
};

export default Loading;
