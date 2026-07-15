import React from "react";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
};

const card = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const ProjectFrame = (props) => {
    const { projects } = props;

    return (
        <div className="overflow-hidden p-10 custom-border">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-12 -mb-px -mr-px items-stretch">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={card}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className="col-span-12 md:col-span-6 lg:col-span-4 group bg-dark-purple border-b border-r border-gray-800/60 flex flex-col">
                        {/* Vignette */}
                        <div className="relative aspect-video overflow-hidden bg-gray-800 font-mono">
                            <span className="absolute top-2 left-2 z-10 px-2 py-1 text-xs font-medium bg-black/70 text-electric-green uppercase tracking-wide">
                                {project.type}
                            </span>
                            <span className="absolute top-2 right-2 z-10 px-2 py-1 text-xs font-medium bg-black/70 text-gray-400/70">
                                {project.year}
                            </span>

                            {project.img_url ? (
                                <motion.img
                                    src={project.img_url}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.06 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                                    Pas d'aperçu
                                </div>
                            )}
                        </div>

                        {/* Contenu */}
                        <div className="p-4 text-gray-purple flex flex-col flex-1">
                            <h2 className="text-white font-bold font-family-unbounded uppercase tracking-wide group-hover:text-electric-green transition-colors">
                                {project.name}
                            </h2>

                            <p className="text-sm mt-1">{project.description}</p>

                            {project.stacks && (
                                <div className="flex flex-wrap space-x-1.5 mt-3">
                                    {project.stacks.map((stack, i) => (
                                        <motion.span
                                            key={stack}
                                            initial={{ opacity: 0, y: 6 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.05 * i, duration: 0.3 }}
                                            className="text-[0.7rem]  border border-gray-700/50 font-mono px-2 my-2 py-0.5">
                                            {stack}
                                        </motion.span>
                                    ))}
                                </div>
                            )}

                            <div className="flex gap-4 mt-auto pt-3 border-t border-gray-800 text-sm">
                                {project.url ? (
                                    <motion.a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 3 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                        className="flex items-center gap-1 font-mono hover:text-electric-green transition-colors">
                                        Visiter <i className="bx bx-chevron-up rotate-45"></i>
                                    </motion.a>
                                ) : (
                                    <motion.p
                                        whileHover={{ x: 3 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                        className="flex items-center gap-1 font-mono  transition-colors">
                                        Visite non disponible
                                    </motion.p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProjectFrame;
