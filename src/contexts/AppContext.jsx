import { createContext, useContext, useEffect, useReducer, useState } from 'react';

import { tasksSample } from '../data/TasksSample';

import { sections } from '../data/Sections';
import { subs } from '../data/Subs';

import { taskReducer } from '../reducers/taskReducer';
import { subReducer } from '../reducers/subReducer';
import { POMODORO_BREAK_TIME, POMODORO_FINISH_BREAK_TIME, POMODORO_TIME } from '../data/Times';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const getInitialTasks = () => tasksSample;

    const getInitialSubs = () => subs;

    const [ TasksState, tasksDispatch ] = useReducer(taskReducer, getInitialTasks());

    const [ SubsState, subsDispatch ] = useReducer(subReducer, getInitialSubs());

    const [ SectionsState, setSectionsState ] = useState([...sections, ...getInitialSubs()]);

    const [ PomodoroTime ] = useState(POMODORO_TIME);

    const [ PomodoroBreakTime ] = useState(POMODORO_BREAK_TIME);

    const [ PomodoroFinishBreakTime ] = useState(POMODORO_FINISH_BREAK_TIME);

    const [ MuteState, setMuteState ] = useState(false);

    const activateSection = (sectionId) => {
        const isAlreadyActive = SectionsState.some(
            (section) => section.id === sectionId && section.active
        );
    
        if (isAlreadyActive) return;
    
        setSectionsState((sections) =>
            sections.map((section) => ({
                ...section,
                active: section.id === sectionId,
            }))
        );
    };
    const getSectionPath = (sectionId) => {
        return '/' + SectionsState.find(section => section.id === sectionId).navigation || '';
    }
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(TasksState));
    }, [TasksState]);

    useEffect(() => {
        localStorage.setItem('subs', JSON.stringify(SubsState));
    }, [SubsState]);

    return (
        <AppContext.Provider value={{
            SectionsState,
            getSectionPath,
            activateSection,

            TasksState,
            tasksDispatch,
            PomodoroTime,
            PomodoroBreakTime,
            PomodoroFinishBreakTime,

            SubsState,
            subsDispatch,

            MuteState,
            setMuteState}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);