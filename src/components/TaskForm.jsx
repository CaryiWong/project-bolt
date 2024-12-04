import React, { useState } from 'react';
import useMemoStore from '../store/memoStore';
import TaskTypeSelect from './tasks/TaskTypeSelect';
import Button from './ui/Button';
import { toast } from 'react-hot-toast';

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    type: 'daily',
    dueDate: '',
    assignedTo: ''
  });
  
  const { addTask, familyMembers } = useMemoStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.dueDate) {
      toast.error('请设置截止日期');
      return;
    }
    addTask(task);
    toast.success('任务已添加');
    setTask({
      title: '',
      description: '',
      type: 'daily',
      dueDate: '',
      assignedTo: ''
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">标题</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">描述</label>
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
          rows={3}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">类型</label>
          <TaskTypeSelect
            value={task.type}
            onChange={(e) => setTask({ ...task, type: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">截止日期</label>
          <input
            type="datetime-local"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">分配给</label>
        <select
          value={task.assignedTo}
          onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
        >
          <option value="">选择家庭成员</option>
          {familyMembers.map(member => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
      </div>
      
      <Button type="submit" className="w-full">
        添加任务
      </Button>
    </form>
  );
};

export default TaskForm;