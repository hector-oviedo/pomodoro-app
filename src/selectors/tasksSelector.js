import { checkDayRelative, convertSecondsToVisual } from "../helpers/formatFields";

export const getActiveTask = (initialTasks) => {
    if (!Array.isArray(initialTasks) || initialTasks.length === 0) return false;

    const activeTask = initialTasks.find((task) => task.active);

    return activeTask || false;
};

export const getTaskStatus = (initialTasks, id) => {
    const task = initialTasks.find(task => task.id === id);

    if (!task || !task.sessions) return 'error';

    let progress = false;
    let completed = true;

    task.sessions.forEach((session) => {
        if (session.totalTime > 0) progress = true;
        if (session.totalTime == 0) completed = false;
    })

    if (completed) return 'completed';
    if (progress) return 'progress';
    return 'empty';
};


export const getTasksDaysCollections = (initialTasks) => {
    const daysMap = {};

    for (let i = 0; i < initialTasks.length; i++) {
        const task = initialTasks[i];
        const date = new Date(task.dateCreation).toISOString().split('T')[0];
        if (!daysMap[date]) {
            daysMap[date] = {
                date,
                label: checkDayRelative(task.dateCreation),
                totalTime: 0,
                tasks: [],
            };
        }
        daysMap[date].tasks.push({
            id: task.id,
            name: task.name,
            subs:task.subs,
            sessions:task.sessions,
            totalTime: convertSecondsToVisual(task.totalTime),
        });
        daysMap[date].totalTime += task.totalTime;
    }

    return Object.values(daysMap).map((day, index) => ({
        id: index,
        ...day,
        totalTime: convertSecondsToVisual(day.totalTime),
    }));
}
export const getTasksBySubIdAndEntryId = (tasks, subId, entryId) => {
    return tasks.filter(task => 
        task.subs.some(sub => sub.subId === subId && sub.entryId === entryId)
    );
};

export const searchTasksBySubIdAndEntryId = (tasks, subId, entryId, taskName) => {
    const filteredTasks = getTasksBySubIdAndEntryId(tasks, subId, entryId);

    if (!taskName) return filteredTasks;

    return filteredTasks.filter(task =>
        task.name.toLowerCase().includes(taskName.toLowerCase())
    );
};