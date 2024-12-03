const createSession = (id) => {
    return {
        id,
        start:null,
        end:null,
        pauses:0,
        totalTime: 0,
    }
}
const createSessions = () => {
    let result = [];
    for (let i = 1; i < 5; i++)
    {
        let session = createSession(i);
        result = [...result, session]
    }
    return result;
}

const createTask = (initialTasks, task) => {
    const nextId = initialTasks.length > 0 ? Math.max(...initialTasks.map((t) => t.id)) + 1 : 0;
    const newTask = { ...task, id: nextId, sessions:createSessions(), active: true };
    return initialTasks.map((t) => ({ ...t, active: false })).concat(newTask);
};
const deleteTask = (initialTasks, taskId) => {
    return initialTasks.filter((task) => task.id !== taskId)
}
const setActiveTask = (initialTasks, taskId) => {
    return initialTasks.map((task) => ({
        ...task,
        active: task.id === taskId ? true : false,
    }))
}
const deleteTasksInSub = (initialTasks, subId, entryId) => {
    return initialTasks.filter(
        (task) =>
            !task.subs.some((sub) => sub.subId === subId && sub.entryId === entryId)
    );
};

const completeSession = (initialTasks, payload) => {
    const { id, sessionData } = payload;

    return initialTasks.map((task) => {
        if (task.id !== id) return task;
        
        let found = false;
        const updatedSessions = task.sessions.map((session) => {
            if (session.totalTime === 0 && !found) {
                found = true;
                return { ...session, ...sessionData };
            }
            return session;
        });

        const updatedTotalTime = updatedSessions.reduce(
            (sum, session) => sum + session.totalTime,
            0
        );

        return {
            ...task,
            sessions: updatedSessions,
            totalTime: updatedTotalTime,
        };
    });
};

export const taskReducer = (initialState = [], action) => {
    switch (action.type)
    {
        case 'CREATE':
            return createTask(initialState, action.payload);
        case 'DELETE':
            return deleteTask(initialState, action.payload);
        case 'DELETE_SUB':
            return deleteTasksInSub(initialState, action.payload.subId, action.payload.entryId);

       case 'SET_ACTIVE':
            return setActiveTask(
                initialState,
                action.payload);
        case 'COMPLETE_SESSION':
            return completeSession(initialState, action.payload);
        default:
            return initialState;
    }
}