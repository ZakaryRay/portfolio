import React from "react";

const ProjectFrame = (props) => {
    const { projects } = props;

    return (
        <div className="grid grid-cols-12 ">
            {projects.map((project) => (
                <div key={project.id} className="col-span-12 md:col-span-6 lg:col-span-4 group">
                    {/* Vignette */}
                    <div className="relative aspect-video overflow-hidden bg-gray-800">
                        <span className="absolute top-2 left-2 z-10 px-2 py-1 text-xs font-medium bg-black/70 text-white uppercase tracking-wide">
                            {project.type}
                        </span>
                        <span className="absolute top-2 right-2 z-10 px-2 py-1 text-xs font-medium bg-black/70 text-white">
                            {project.year}
                        </span>

                        {project.url ? (
                            <iframe
                                src={project.url}
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
                    <div className="pt-4">
                        <h2 className="text-white font-bold uppercase tracking-wide group-hover:text-electric-green transition-colors">
                            {project.name}
                        </h2>

                        <p className="text-gray-400 text-sm mt-1">{project.description}</p>

                        {project.stacks && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.stacks.map((stack) => (
                                    <span
                                        key={stack}
                                        className="text-xs text-gray-300 border border-gray-700 px-2 py-0.5">
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex gap-4 mt-4 pt-3 border-t border-gray-800 text-sm text-gray-400">
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-white transition-colors">
                                    Live site
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectFrame;
