import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import useMemoStore from '../../store/memoStore';
import TaskTypeSelect from './TaskTypeSelect';
import Button from '../ui/Button';
import { toast } from 'react-hot-toast';

const TaskEditModal = ({ task, isOpen, onClose }) => {
  const [editedTask, setEditedTask] = useState(task);
  const { updateTask, familyMembers } = useMemoStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(task.id, editedTask);
    toast.success('任务已更新');
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-lg w-full bg-white rounded-lg shadow-xl">
          <div className="p-6">
            <Dialog.Title className="text-lg font-medium mb-4">
              编辑任务
            </Dialog.Title>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">标题</label>
                <input
                  type="text"
                  value={editedTask.title}
                  onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">描述</label>
                <textarea
                  value={editedTask.description}
                  onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">类型</label>
                  <TaskTypeSelect
                    value={editedTask.type}
                    onChange={(e) => setEditedTask({ ...editedTask, type: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">截止日期</label>
                  <input
                    type="datetime-local"
                    value={editedTask.dueDate}
                    onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">分配给</label>
                <select
                  value={editedTask.assignedTo || ''}
                  onChange={(e) => setEditedTask({ ...editedTask, assignedTo: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
                >
                  <option value="">选择家庭成员</option>
                  {familyMembers.map(member => (
                    <option key={member.id} value={member.id}>{member.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <Button variant="secondary" onClick={onClose}>
                  取消
                </Button>
                <Button type="submit">
                  保存
                </Button>
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default TaskEditModal;