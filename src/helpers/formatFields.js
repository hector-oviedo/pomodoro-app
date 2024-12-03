export const convertSecondsToVisual = (totaltime) => {
    const hours = Math.floor(totaltime / 3600);
    const minutes = Math.floor((totaltime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totaltime % 60).toString().padStart(2, '0');

    return hours > 0
        ? `${hours}:${minutes}:${seconds}`
        : `${minutes}:${seconds}`;
};

export const calculatePercentage = (total, actual) => {
    if (total === 0) return 0;
    if (actual <= 0) return 100; 
    return Math.round(((total - actual) / total) * 100);
};
export const convertDateToVisual = (actualDate) => {
    if (!actualDate) return '';
    const date = new Date(actualDate); 

    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    return `${day} of ${month}, ${year}`;
}
export const convertTimeToVisual = (actualDate) => {
    if (!actualDate) return '';
    const date = new Date(actualDate);

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
};
export const checkDayRelative = (date) => {
    const inputDate = new Date(date);
    
    inputDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (inputDate.getTime() === today.getTime()) {
        return 'Today';
    } else if (inputDate.getTime() === yesterday.getTime()) {
        return 'Yesterday';
    } else {
        return false;
    }
};