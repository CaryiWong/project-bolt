import React, { useState } from 'react';
import { CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import useMemoStore from '../../store/memoStore';
import TaskBadge from './TaskBadge';
import AssigneeInfo from './AssigneeInfo';
import TaskEditModal from './TaskEditModal';
import { toast } from 'react-hot-toast';

const TaskItem = ({ task }) => {
  const { completeTask, removeTask } = useMemoStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const handleComplete = () => {
    if (!task.assignedTo) {
      toast.error('请先分配任务给家庭成员');
      return;
    }
    completeTask(task.id, task.assignedTo);
    toast.success('任务完成！');
  };
  
  const handleDelete = () => {
    if (window.confirm('确定要删除这个任务吗？')) {
      removeTask(task.id);
      toast.success('任务已删除');
    }
  };
  
  return (
    <>
      <div
        className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${
          task.completed ? 'border-green-500 opacity-75' : 'border-pink-500'
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{task.title}</h3>
          <div className="flex items-center space-x-2">
            <TaskBadge type={task.type} />
            {!task.completed && (
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="p-1 text-gray-400 hover:text-gray-500"
                >
                  <PencilIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={handleDelete}
                  className="p-1 text-gray-400 hover:text-red-500"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mt-2">{task.description}</p>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span>截止日期: {format(new Date(task.dueDate), 'yyyy-MM-dd HH:mm')}</span>
            <AssigneeInfo assignedTo={task.assignedTo} />
          </div>
          
          {!task.completed && (
            <button
              onClick={handleComplete}
              className="flex items-center space-x-1 text-green-600 hover:text-green-700"
            >
              <CheckCircleIcon className="h-5 w-5" />
              <span>完成</span>
            </button>
          )}
        </div>
      </div>
      
      <TaskEditModal
        task={task}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
  );
};

export default TaskItem;