import React from 'react';
import useMemoStore from '../store/memoStore';
import MemberCard from './members/MemberCard';
import MemberForm from './members/MemberForm';

const FamilyMemberList = () => {
  const { familyMembers, points, badges } = useMemoStore();
  
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">添加家庭成员</h2>
          <MemberForm />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {familyMembers.map(member => (
          <MemberCard
            key={member.id}
            member={member}
            points={points[member.id]}
            badges={badges[member.id]}
          />
        ))}
      </div>
    </div>
  );
};

export default FamilyMemberList;