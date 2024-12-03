const createSub = (state, subId, entry) => {
    return state.map((sub) => {
        if (sub.id === subId) {
            const nextId = sub.entries?.length > 0
                ? Math.max(...sub.entries.map((e) => e.id)) + 1
                : 0;

            const updatedEntries = [
                ...(sub.entries || []),
                { ...entry, id: nextId },
            ];

            return { ...sub, entries: updatedEntries };
        }

        return sub;
    });
};

const deleteSub = (state, subId, entryId) => {
    return state.map((sub) => {
        if (sub.id === subId) {
            const updatedEntries = sub.entries?.filter((entry) => entry.id !== entryId) || [];
            return { ...sub, entries: updatedEntries };
        }
        return sub;
    });
};

export const subReducer = (initialState, action) => {
    switch (action.type) {
        case 'CREATE':
            return createSub(initialState, action.payload.subId, action.payload.entry);
        case 'DELETE':
            return deleteSub(initialState, action.payload.subId, action.payload.entryId);
        default:
            return initialState;
    }
};