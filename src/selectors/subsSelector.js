export const getSub = (initialSubs, id) => {
    return initialSubs.find((sub) => sub.id === id) || [];
}
export const getSubEntry = (initialSubs, subId, entryId) => {
    return initialSubs.find((sub) => sub.id === subId).entries
    .find((entry) => entry.id === entryId) || [];
}