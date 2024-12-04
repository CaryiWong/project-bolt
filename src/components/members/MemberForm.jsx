import React, { useState } from 'react';
import useMemoStore from '../../store/memoStore';
import Button from '../ui/Button';
import { AVATAR_OPTIONS } from '../../utils/constants';

const MemberForm = () => {
  const [member, setMember] = useState({
    name: '',
    avatar: '👤',
    role: 'member'
  });
  
  const { addFamilyMember } = useMemoStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addFamilyMember(member);
    setMember({
      name: '',
      avatar: '👤',
      role: 'member'
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">姓名</label>
        <input
          type="text"
          value={member.name}
          onChange={(e) => setMember({ ...member, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">头像</label>
        <div className="grid grid-cols-6 gap-2">
          {AVATAR_OPTIONS.map((avatar) => (
            <button
              key={avatar}
              type="button"
              onClick={() => setMember({ ...member, avatar })}
              className={`text-2xl p-2 rounded-lg ${
                member.avatar === avatar
                  ? 'bg-pink-100 ring-2 ring-pink-500'
                  : 'hover:bg-gray-100'
              }`}
            >
              {avatar}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">角色</label>
        <select
          value={member.role}
          onChange={(e) => setMember({ ...member, role: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
        >
          <option value="parent">家长</option>
          <option value="child">孩子</option>
          <option value="member">其他成员</option>
        </select>
      </div>
      
      <Button type="submit" className="w-full">
        添加成员
      </Button>
    </form>
  );
};

export default MemberForm;