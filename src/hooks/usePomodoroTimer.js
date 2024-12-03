import { useEffect, useState } from 'react';
import { useTimer } from './useTimer';

import { convertSecondsToVisual, calculatePercentage } from '../helpers/formatFields';
export const usePomodoroTimer = (initialValue = 59, onTick, onComplete) => {

    const onCompleteHandler = () => {
        setActualState('COMPLETED')
        if (onComplete) onComplete();
    }

    const [ TotalTime, setTotalTime ] = useState(initialValue);

    const [ ActualTime, setActualTime ] = useState(convertSecondsToVisual(initialValue));

    const [ ActualProgress, setActualProgress ] = useState(0);

    const [ TotalPauses, setTotalPauses ] = useState(0);

    const [ ActualState, setActualState ] = useState('');

    const { ActualSecond, doStart, doPause } = useTimer(initialValue, onTick, onCompleteHandler);
   
    const startTimer = (totalTime) => {
        setActualState('RUNNING')
        setTotalPauses(0)
        setTotalTime(totalTime)
        doStart(totalTime)
    }

    const pauseTimer = () => {
        if (ActualState === 'PAUSED') {
            setActualState('RUNNING')
            doPause(false)
        } else {
            setActualState('PAUSED')
            setTotalPauses((actualPause) => { return (actualPause + 1)})
            doPause(true)
        }
    }

    const updateTimer = (totalTime) => {
        setTotalTime(totalTime);
        setActualState('IDLE');
        setActualProgress(0);
    };

    useEffect(() => {
        setActualTime(convertSecondsToVisual(ActualSecond));
        setActualProgress(calculatePercentage(TotalTime, ActualSecond));
    }, [ActualState, ActualSecond, TotalTime]);

    return {
        ActualTime,
        ActualProgress,
        TotalPauses,
        ActualState,
        ActualSecond,
        startTimer,
        pauseTimer,
        updateTimer,
    }
}