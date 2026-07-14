import React from "react";

const ProjectFrame = (props) => {
    const { projects } = props;

    return (
        <div className="overflow-hidden p-10">
            <div className="grid grid-cols-12 -mb-px -mr-px">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="col-span-12 md:col-span-6 lg:col-span-4 group bg-dark-purple border-b border-r border-gray-800/60">
                        {/* Vignette */}
                        <div className="relative aspect-video overflow-hidden bg-gray-800 font-mono">
                            <span className="absolute top-2 left-2 z-10 px-2 py-1 text-xs font-medium bg-black/70 text-electric-green uppercase tracking-wide">
                                {project.type}
                            </span>
                            <span className="absolute top-2 right-2 z-10 px-2 py-1 text-xs font-medium bg-black/70 text-gray-400/70">
                                {project.year}
                            </span>

                            {project.img_url ? (
                                <img
                                    src={project.img_url}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-300 "
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                                    Pas d'aperçu
                                </div>
                            )}
                        </div>

                        {/* Contenu */}
                        <div className="p-4 text-gray-purple">
                            <h2 className="text-white font-bold font-family-unbounded uppercase tracking-wide group-hover:text-electric-green transition-colors">
                                {project.name}
                            </h2>

                            <p className=" text-sm mt-1">{project.description}</p>

                            {project.stacks && (
                                <div className="flex flex-wrap space-x-1.5 mt-3">
                                    {project.stacks.map((stack) => (
                                        <span
                                            key={stack}
                                            className="text-[0.7rem]  border border-gray-700/50 font-mono px-2 py-0.5">
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="flex gap-4 mt-4 pt-3 border-t border-gray-800 text-sm ">
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 font-mono hover:text-electric-green transition-colors">
                                        Live site <i className="bx bx-chevron-up rotate-45"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectFrame;
