import { useEffect, useRef, useState } from 'react';

export const useTimer = (initialTime, onTick, onComplete) => {
    if (initialTime < 1) throw new Error("Initial time must be higher than 1 second");

    const [ActualSecond, setActualSecond] = useState(initialTime);
    const [Active, setActive] = useState(false);
    const endTimeRef = useRef(null);
    const savedOnTick = useRef(onTick);
    const savedOnComplete = useRef(onComplete);

    useEffect(() => {
        savedOnTick.current = onTick;
    }, [onTick]);

    useEffect(() => {
        savedOnComplete.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        let timerId;

        const tick = () => {
            if (!Active) return;

            const timeLeft = Math.max(0, Math.round((endTimeRef.current - Date.now()) / 1000));
            setActualSecond(timeLeft);

            if (timeLeft <= 0) {
                setActive(false);
                if (savedOnComplete.current) savedOnComplete.current();
            } else {
                if (savedOnTick.current) savedOnTick.current(timeLeft);
                timerId = setTimeout(tick, 250);
            }
        };

        if (Active) {
            tick();
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [Active]);

    const doStart = (totalTime) => {
        setActualSecond(totalTime);
        endTimeRef.current = Date.now() + totalTime * 1000;
        setActive(true);
    };

    const doPause = (isPausing) => {
        if (isPausing) {
            setActive(false);
            const timeLeft = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
            setActualSecond(timeLeft);
        } else {
            // Resuming
            endTimeRef.current = Date.now() + ActualSecond * 1000;
            setActive(true);
        }
    };

    return {
        ActualSecond,
        doStart,
        doPause,
    };
};