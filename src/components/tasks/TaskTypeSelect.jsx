import React from 'react';
import { TASK_TYPES } from '../../utils/constants';

const TaskTypeSelect = ({ value, onChange, className }) => (
  <select
    value={value}
    onChange={onChange}
    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 ${className}`}
  >
    {Object.entries(TASK_TYPES).map(([key, { label }]) => (
      <option key={key} value={key}>{label}</option>
    ))}
  </select>
);

export default TaskTypeSelect;