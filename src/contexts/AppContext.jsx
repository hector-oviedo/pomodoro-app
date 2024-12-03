import { createContext, useContext, useReducer, useState } from 'react';

//import { tasksSample } from '../data/TasksSample';

import { sections } from '../data/Sections';
import { subs } from '../data/Subs';

import { taskReducer } from '../reducers/taskReducer';
import { subReducer } from '../reducers/subReducer';
import { POMODORO_BREAK_TIME, POMODORO_FINISH_BREAK_TIME, POMODORO_TIME } from '../data/Times';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ TasksState, tasksDispatch ] = useReducer(taskReducer, []);

    const [ SubsState, subsDispatch ] = useReducer(subReducer, subs);

    const [ SectionsState, setSectionsState ] = useState([...sections, ...subs]);

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