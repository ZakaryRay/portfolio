import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

const CountUp = ({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 2,
    className = "",
    startWhen = true,
    onEnd,
}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = String(direction === "down" ? to : from);
        }
    }, [from, to, direction]);

    useEffect(() => {
        if (!isInView || !startWhen) return;

        const timeoutId = setTimeout(() => {
            const controls = animate(motionValue, direction === "down" ? from : to, {
                duration,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Intl.NumberFormat("en-US").format(
                            Math.round(latest),
                        );
                    }
                },
                onComplete: () => {
                    if (ref.current) {
                        ref.current.textContent = String(direction === "down" ? from : to);
                    }
                    onEnd?.();
                },
            });

            return () => controls.stop();
        }, delay * 1000);

        return () => clearTimeout(timeoutId);
    }, [isInView, startWhen, motionValue, direction, from, to, delay, duration, onEnd]);

    return <span className={className} ref={ref} />;
};

export default CountUp;
