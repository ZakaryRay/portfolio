import React from "react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1, delayChildren: 0.1, duration: 0.5, ease: "easeOut" },
    },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Footer_projet = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="uppercase font-mono text-xs flex justify-between px-10 py-6 max-sm:flex-col max-sm:items-center max-sm:space-y-4 ">
            <motion.p variants={item} className="text-gray-purple">
                Plus d'info sur demande
            </motion.p>
            <motion.a
                variants={item}
                href="mailto:zakary-raymond@live.fr"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="text-electric-green flex items-center gap-1">
                Prendre contact <i className="bx bx-chevron-up rotate-45"></i>
            </motion.a>
        </motion.div>
    );
};

export default Footer_projet;
