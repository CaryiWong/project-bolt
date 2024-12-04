import React from 'react';
import TaskItem from './TaskItem';
import useMemoStore from '../../store/memoStore';
import { groupTasksByStatus } from '../../utils/taskUtils';

const TaskList = () => {
  const { tasks } = useMemoStore();
  const { completedTasks, pendingTasks } = groupTasksByStatus(tasks);
  
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-700">待完成任务</h3>
        {pendingTasks.length === 0 ? (
          <p className="text-gray-500">暂无待完成任务</p>
        ) : (
          pendingTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        )}
      </div>
      
      {completedTasks.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-700">已完成任务</h3>
          {completedTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;