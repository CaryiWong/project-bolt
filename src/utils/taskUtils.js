export const groupTasksByStatus = (tasks) => {
  return {
    completedTasks: tasks.filter(task => task.completed),
    pendingTasks: tasks.filter(task => !task.completed)
  };
};

export const getTaskPriority = (task) => {
  const now = new Date();
  const dueDate = new Date(task.dueDate);
  const diffHours = (dueDate - now) / (1000 * 60 * 60);
  
  if (diffHours <= 24) return 'high';
  if (diffHours <= 72) return 'medium';
  return 'low';
};