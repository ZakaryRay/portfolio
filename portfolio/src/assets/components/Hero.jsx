import React from "react";

const Hero = () => {
    return (
        <div className="p-10 border-b border-gray-900">
            <div className="font-family-unbounded font-black text-7xl mb-6">
                <p>ZAKARY</p>
                <p className="text-electric-green ">RAYMOND</p>
            </div>
            <div className="font-mono flex space-x-7 text-sm">
                <p className="text-gray-purple">DÉVELOPPEUR WEB FRONT-END</p>
                <span className="w-1 h-1 bg-gray-purple/50 self-center rounded"></span>
                <div className="space-x-2 flex ">
                    <span className="relative inline-flex w-2 h-2 self-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded bg-electric-green opacity-75"></span>
                        <span className="relative inline-flex rounded w-2 h-2 bg-electric-green"></span>
                    </span>
                    <p className="text-electric-green">DISPONIBLE IMMÉDIATEMENT</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
