import React from "react";

const Stacks = () => {
    const frontend = ["React", "JavaScript", "Vue.js", "Tailwind CSS", "Angular", "HTML5", "CSS3"];
    const backend = ["Laravel", "PHP", "Supabase", "MySQL"];
    const tooling = ["GitHub", "Figma", "Railway", "npm"];

    return (
        <div className="font-mono space-y-8 custom:w-1/2">
            <div className="space-y-3">
                <div className="flex space-x-5">
                    <h2 className="text-sm text-electric-green">FRONTEND</h2>
                    <span className="h-px w-full bg-gray-800/60 inline-block self-center"></span>
                </div>
                <div className="flex space-x-3 flex-wrap ">
                    {frontend.map((stack) => (
                        <p
                            key={stack}
                            className="border border-gray-800/60 hover:border-electric-green/70 transition-all duration-200 cursor-default px-2 py-1 text-sm max-sm:mb-2">
                            {stack}
                        </p>
                    ))}
                </div>
            </div>
            <div className="space-y-3">
                <div className="flex space-x-5">
                    <h2 className="text-sm text-electric-green">BACKEND</h2>
                    <span className="h-px w-full bg-gray-800/60 inline-block self-center"></span>
                </div>
                <div className="flex space-x-3">
                    {backend.map((stack) => (
                        <p
                            key={stack}
                            className="border border-gray-800/60 hover:border-electric-green/70 transition-all duration-200 cursor-default px-2 py-1 text-sm">
                            {stack}
                        </p>
                    ))}
                </div>
            </div>
            <div className="space-y-3">
                <div className="flex space-x-5">
                    <h2 className="text-sm text-electric-green">TOOLING</h2>
                    <span className="h-px w-full bg-gray-800/60 inline-block self-center"></span>
                </div>
                <div className="flex space-x-3">
                    {tooling.map((stack) => (
                        <p
                            key={stack}
                            className="border border-gray-800/60 hover:border-electric-green/70 transition-all duration-200 cursor-default px-2 py-1 text-sm">
                            {stack}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stacks;
