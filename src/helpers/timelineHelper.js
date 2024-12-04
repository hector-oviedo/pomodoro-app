export const calculateTimelineSegments = (tasks) => {
  const segments = [];

  tasks.forEach((task) => {
    const { sessions } = task;
    if (!sessions) return;
    
    sessions.forEach((session) => {
      
    });
  });

  return segments;
};