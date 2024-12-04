import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import useMemoStore from '../store/memoStore';
import TaskBadge from './tasks/TaskBadge';

const TaskList = () => {
  const { tasks, completeTask, familyMembers } = useMemoStore();
  
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div
          key={task.id}
          className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${
            task.completed ? 'border-green-500 opacity-75' : 'border-pink-500'
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{task.title}</h3>
            <TaskBadge type={task.type} />
          </div>
          
          <p className="text-gray-600 mt-2">{task.description}</p>
          
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>截止日期: {format(new Date(task.dueDate), 'yyyy-MM-dd HH:mm')}</span>
              <span>分配给: {familyMembers.find(m => m.id === task.assignedTo)?.name}</span>
            </div>
            
            {!task.completed && (
              <button
                onClick={() => completeTask(task.id, task.assignedTo)}
                className="flex items-center space-x-1 text-green-600 hover:text-green-700"
              >
                <CheckCircleIcon className="h-5 w-5" />
                <span>完成</span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;