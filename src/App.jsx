import { Header, Task, CreateTask, SubPanel, CreateSub, CalendarPanel, PomodoroClock } from './components'
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAppContext } from './contexts/AppContext';
import { useEffect } from 'react';

export const App =() => {
    const location = useLocation();
    
    const { activateSection, SectionsState, SubsState, getSectionPath } = useAppContext();
    
    useEffect(() => {
        const matchingSection = SectionsState.find(
            (section) => location.pathname === '/' + section.navigation
        );

        if (matchingSection) {
            activateSection(matchingSection.id);
        }
    }, [location.pathname, SectionsState]);

    return (
        <>
            <Header />
            <Routes>
                <Route path={getSectionPath('TASK')} element={<Task/>}/>

                <Route path={getSectionPath('TASK_CREATE')} element={<CreateTask/>}/>

                <Route path={getSectionPath('POMODORO')} element={<PomodoroClock />} />

                <Route path={getSectionPath('DAYS')} element={<CalendarPanel/>}/>

                {SubsState.map((sub) => (
                    <Route
                        key={sub.id}
                        path={`${sub.navigation}`}
                        element={<SubPanel
                            subId={sub.id}
                            navigation={sub.navigation}/>}
                    />
                ))}

                {SubsState.map((sub) => (
                    <Route
                        key={`${sub.id}-create`}
                        path={`${sub.navigation}/create`}
                        element={<CreateSub
                            subId={sub.id}/>}
                    />
                ))}
            </Routes>
        </>
    )
}