import React from 'react';
import { TASK_TYPES } from '../../utils/constants';

const TaskBadge = ({ type }) => {
  const typeInfo = TASK_TYPES[type] || { label: type, color: 'bg-gray-100 text-gray-800' };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeInfo.color}`}>
      {typeInfo.label}
    </span>
  );
};

export default TaskBadge;