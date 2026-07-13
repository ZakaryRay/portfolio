import React from "react";
import { motion } from "framer-motion";
import Ferrofluid from "@/components/Ferrofluid";

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

const Hero = () => {
    return (
        <div className="relative sm:h-70 md:h-100 p-10 border-b border-gray-900 overflow-hidden flex flex-col items-start justify-center">
            <div className="absolute inset-0 -z-10">
                <Ferrofluid
                    colors={["#52517b", "#c8ff3e", "#52517b"]}
                    speed={0.5}
                    scale={1.9}
                    turbulence={0.6}
                    fluidity={0.1}
                    rimWidth={0.2}
                    sharpness={2.5}
                    shimmer={1.25}
                    glow={1.7}
                    flowDirection="down"
                    opacity={1}
                    mouseInteraction={false}
                    mouseStrength={1}
                    mouseRadius={0.55}
                />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col items-start">
                <div className="font-family-unbounded font-black text-4xl md:5xl md:text-7xl mb-6 transition-all duration-300">
                    <motion.p variants={item}>ZAKARY</motion.p>
                    <motion.p variants={item} className="text-electric-green">
                        RAYMOND
                    </motion.p>
                </div>

                <motion.div
                    variants={item}
                    className="font-mono flex space-x-7 text-sm max-sm:flex-col max-sm:space-y-5 transition-all">
                    <p className="text-gray-purple">DÉVELOPPEUR WEB FRONT-END</p>
                    <span className="w-1 h-1 bg-gray-purple/50 self-center rounded max-sm:hidden"></span>
                    <div className="space-x-2 flex">
                        <span className="relative inline-flex w-2 h-2 self-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded bg-electric-green opacity-75"></span>
                            <span className="relative inline-flex rounded w-2 h-2 bg-electric-green"></span>
                        </span>
                        <p className="text-electric-green">DISPONIBLE IMMÉDIATEMENT</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
