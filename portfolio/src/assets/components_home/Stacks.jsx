import React from "react";
import { motion } from "framer-motion";

const sectionVariant = {
    hidden: { opacity: 0, y: 15 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const tagsContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.06 },
    },
};

const tagItem = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const Stacks = () => {
    const frontend = ["React", "JavaScript", "Vue.js", "Tailwind CSS", "Angular", "HTML5", "CSS3"];
    const backend = ["Laravel", "PHP", "Supabase", "MySQL"];
    const tooling = ["GitHub", "Figma", "Railway", "npm"];

    return (
        <motion.div
            className="font-mono space-y-8 custom:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={sectionVariant} className="space-y-3">
                <div className="flex space-x-5">
                    <h2 className="text-sm text-electric-green">FRONTEND</h2>
                    <span className="h-px w-full bg-gray-800/60 inline-block self-center"></span>
                </div>
                <motion.div
                    variants={tagsContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex space-x-3 flex-wrap ">
                    {frontend.map((stack) => (
                        <motion.p
                            key={stack}
                            variants={tagItem}
                            className="border border-gray-800/60 hover:border-electric-green/70 transition-all duration-200 cursor-default px-2 py-1 text-sm max-sm:mb-2">
                            {stack}
                        </motion.p>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div variants={sectionVariant} className="space-y-3">
                <div className="flex space-x-5">
                    <h2 className="text-sm text-electric-green">BACKEND</h2>
                    <span className="h-px w-full bg-gray-800/60 inline-block self-center"></span>
                </div>
                <motion.div
                    variants={tagsContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex space-x-3">
                    {backend.map((stack) => (
                        <motion.p
                            key={stack}
                            variants={tagItem}
                            className="border border-gray-800/60 hover:border-electric-green/70 transition-all duration-200 cursor-default px-2 py-1 text-sm">
                            {stack}
                        </motion.p>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div variants={sectionVariant} className="space-y-3">
                <div className="flex space-x-5">
                    <h2 className="text-sm text-electric-green">TOOLING</h2>
                    <span className="h-px w-full bg-gray-800/60 inline-block self-center"></span>
                </div>
                <motion.div
                    variants={tagsContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex space-x-3">
                    {tooling.map((stack) => (
                        <motion.p
                            key={stack}
                            variants={tagItem}
                            className="border border-gray-800/60 hover:border-electric-green/70 transition-all duration-200 cursor-default px-2 py-1 text-sm">
                            {stack}
                        </motion.p>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Stacks;
