import React from 'react';
import useMemoStore from '../../store/memoStore';

const AssigneeInfo = ({ assignedTo }) => {
  const { familyMembers } = useMemoStore();
  const assignee = familyMembers.find(m => m.id === assignedTo);
  
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-500">分配给:</span>
      {assignee ? (
        <div className="flex items-center space-x-1">
          <span className="text-lg">{assignee.avatar}</span>
          <span className="text-gray-700">{assignee.name}</span>
        </div>
      ) : (
        <span className="text-gray-400">未分配</span>
      )}
    </div>
  );
};

export default AssigneeInfo;