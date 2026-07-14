import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

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

const CountUp = ({ value, suffix = "", duration = 1.5 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration, bounce: 0 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
        return unsubscribe;
    }, [springValue]);

    return (
        <span ref={ref}>
            {displayValue}
            {suffix}
        </span>
    );
};

const statsData = [
    { value: 1, suffix: "+", label: "ANNÉES D'EXPÉRIENCE" },
    { value: 3, suffix: "+", label: "PROJETS LIVRÉS" },
    { value: 1, suffix: "", label: "DIPLÔME" },
    { value: 100, suffix: "%", label: "MOTIVATION" },
];

const Stats = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-12">
            {statsData.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    variants={item}
                    className={`col-span-6 text-electric-green font-family-unbounded text-4xl md:text-5xl custom:col-span-3 p-10 border-gray-900 ${
                        index !== statsData.length - 1 ? "border-r" : ""
                    } ${index === 2 ? "" : "custom:border-r"}`}>
                    <p className="font-black">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="font-mono text-gray-purple text-sm">{stat.label}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Stats;
