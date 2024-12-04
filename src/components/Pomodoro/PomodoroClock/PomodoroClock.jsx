import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../contexts/AppContext';
import { getActiveTask, getTaskStatus } from '../../../selectors/tasksSelector';
import { usePomodoroTimer } from '../../../hooks/usePomodoroTimer';
import { ClockComponent } from '../ClockComponent/ClockComponent';
import { PomodoroInfo } from './PomodoroInfo';
import { PomodoroProgress } from './PomodoroProgress';

import focusSoundFile from '/sounds/clockSound.mp3';
import breakSoundFile from '/sounds/clockSound.mp3';

import styles from './PomodoroClock.module.css';
export const PomodoroClock = () => {
    const focusAudioRef = useRef(new Audio(focusSoundFile));
    const breakAudioRef = useRef(new Audio(breakSoundFile));

    const navigate = useNavigate();
    
    const { TasksState, tasksDispatch, getSectionPath, PomodoroTime, PomodoroBreakTime, PomodoroFinishBreakTime } = useAppContext();
    
    const [ Task ] = useState(getActiveTask(TasksState));

    const [ TaskStatus, setTaskStatus ] = useState('empty');
    
    const [ SessionStart, setSessionStart ] = useState(null);

    const [ Touched, setTouched ] = useState(false);

    const [ FocusMode, setFocusMode ] = useState(true);

    const [ ButtonLabel, setButtonLabel ] = useState('Start Break!');

    const onTick = () => {
        
    }

    const onComplete = () => {
        if (FocusMode) saveSession();

        if (FocusMode) {
            focusAudioRef.current.play().catch((error) => {
                console.error('Error playing focus sound:', error);
            });
        } else {
            breakAudioRef.current.play().catch((error) => {
                console.error('Error playing break sound:', error);
            });
        }
    }

    const saveSession = () => {
        //save session
        const id = Task.id;
        const sessionData = {
            start: SessionStart,
            end: new Date(),
            pauses: 0,
            totalTime: PomodoroTime,
        };
        tasksDispatch({ type: 'COMPLETE_SESSION', payload: { id, sessionData } });
    }

    const onHandleClick = () => {
        if (FocusMode) {
            //next step is: break
            setFocusMode(false);

            //next action
            switch (TaskStatus)
            {
                case 'completed':
                    setButtonLabel('Finished!');
                    startTimer(PomodoroFinishBreakTime);
                    break;
                case 'empty':
                case 'progress':
                    setButtonLabel('Start Focus!');
                    startTimer(PomodoroBreakTime);
                    break;
                default:
                    throw Error('ERROR: Task not found');
            }
        } else {
            setSessionStart(new Date());
            
            //next step is: focus
            setFocusMode(true);

            //next action
            switch (TaskStatus)
            {
                case 'completed':
                    navigate(getSectionPath('TASK'));
                    return;
                case 'empty':
                case 'progress':
                    setButtonLabel('Start Break!');
                    startTimer(PomodoroTime);
                    break;
                default:
                    throw Error('ERROR: Task not found');
            }
        }
    }

    const { ActualState, ActualTime, ActualProgress, startTimer, pauseTimer } = usePomodoroTimer(PomodoroTime, onTick, onComplete);

    const handlePause = () => { pauseTimer(); };

    const handleStart = () => {
        if (Touched) return;

        setTouched(true);

        setSessionStart(new Date());

        setFocusMode(true);

        setButtonLabel('Start Break!');

        startTimer(PomodoroTime);
    }
    
    useEffect(() => {
        if (!getActiveTask(TasksState)) navigate(getSectionPath('TASK_CREATE'));
    },[Task])

    useEffect(() => {
        const newStatus = getTaskStatus(TasksState,Task.id);
        setTaskStatus(newStatus);
    }, [TasksState]);

    useEffect(() => {
        document.title = FocusMode
            ? `Pomodoro [${ActualTime}]`
            : `Break [${ActualTime}]`;
    }, [ActualTime, FocusMode]);

    useEffect(() => {
        return () => {
            document.title = "Pomodoro App";
        };
    })

    return (
        <section className={styles['pomodoro-container']}>
            <PomodoroInfo/>
            <ClockComponent
                actualstate={ActualState}
                progress={ActualProgress}
                actualtime={ActualTime}
                onStart={handleStart}
                onPause={handlePause}
                onHandleActionClick={onHandleClick}
                buttonLabel={ButtonLabel}/>
            <PomodoroProgress sessions={getActiveTask(TasksState).sessions || []}/>
        </section>
    )
}