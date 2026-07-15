import React from "react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const separator = {
    hidden: { scaleX: 0, opacity: 0 },
    show: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Hero_projet = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative h-40 md:h-60 p-10 border-b border-gray-900 overflow-hidden flex flex-col items-start justify-center space-y-2 transition-all">
            <motion.div
                variants={item}
                className="font-mono text-sm text-electric-green flex space-x-2">
                <p>Travaux sélectionnés</p>
                <motion.span
                    variants={separator}
                    style={{ transformOrigin: "left" }}
                    className="w-1 h-1 bg-gray-purple/50 self-center rounded "></motion.span>
                <p>2025-2026</p>
            </motion.div>
            <motion.h2
                variants={item}
                className="text-6xl custom:text-7xl font-family-unbounded font-black transition-all">
                Projets
            </motion.h2>
        </motion.div>
    );
};

export default Hero_projet;
