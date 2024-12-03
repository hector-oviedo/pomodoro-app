import { useEffect, useState } from "react";

export const useTimer = (initialTime, onTick, onComplete) => {
    if (initialTime < 1) throw new Error("Initial time must be higher than 1 second");

    const [ActualSecond, setActualSecond] = useState(initialTime);

    const [Active, setActive] = useState(false);

    useEffect(() => {
        if (!Active) return;

        const interval = setInterval(() => {
            setActualSecond((prevSecond) => {
                if (prevSecond <= 1) {
                    clearInterval(interval);
                    setActive(false);
                    if (onComplete) onComplete();
                    return 0;
                } else {
                    if (onTick) onTick(prevSecond - 1);
                    return prevSecond - 1;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [Active]);

    const doStart = (totalTime) => {
        setActualSecond(totalTime);
        setActive(true);
    };

    const doPause = (isPausing) => {
        setActive(!isPausing);
    };

    return {
        ActualSecond,
        doStart,
        doPause,
    };
};
