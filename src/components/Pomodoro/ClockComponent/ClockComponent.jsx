import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

import styles from './ClockComponent.module.css';
const updateProgress = (percentage) => {
    if (percentage < 1) percentage = 1;
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    const progressRing = document.getElementById('progress-ring-progress');
    if (progressRing) progressRing.style.strokeDashoffset = offset;
};

export const ClockComponent = ({progress, actualtime, actualstate, onStart, onPause, onHandleActionClick, buttonLabel}) => {
    const Progress = progress;
    const Time = actualtime;
    const ActualState = actualstate;

    useEffect(() => {
        
    })

    useEffect(() => {
        updateProgress(Progress)
    },[Progress, Time, ActualState])

    useEffect(() => {
        if (ActualState === 'IDLE' && onStart) onStart();
    }, [ActualState]);
    
    const onHandleClick = (e) => {
        (progress === 0)? onStart() : onPause();
    }

    return (
        <section className={styles['circular-timer']}>

        { /* Progress - START */}
        <svg className={styles['progress-ring']} viewBox="0 0 36 36">
            <circle className={styles['progress-ring-background']} cx="18" cy="18" r="16" />
            <circle
                id="progress-ring-progress"
                className={styles['progress-ring-progress']}
                cx="18"
                cy="18"
                r="16"
                style={{ strokeDasharray: '100, 100', strokeDashoffset: '25' }}/>
        </svg>
        { /* Progress - END*/}
        <div className={styles['timer']}>{Time}</div>
        {
            (ActualState === 'COMPLETED')?
            (
                <button
                    className={styles['break-button']}
                    onClick={(e) => { if (onHandleActionClick) onHandleActionClick()}}
                >
                   {buttonLabel}
                </button>
            ):
            (
                <button
                    className={styles['clock-button']}
                    onClick={onHandleClick}
                    disabled={ActualState === 'COMPLETED'}
                >
                    {
                        (ActualState === 'RUNNING') ? (<PauseIcon className={styles['clock-button-icon']}/>)
                        : (<PlayIcon className={styles['clock-button-icon']}/>)
                    }
                </button>
            )
        }
      </section>
    )
}