import React from 'react';
import { getBadgeEmoji } from '../../utils/badgeUtils';
import { ROLE_LABELS } from '../../utils/constants';

const MemberCard = ({ member, points, badges }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">
            <span className="text-2xl">{member.avatar}</span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
            <span className="text-sm text-gray-500">{ROLE_LABELS[member.role]}</span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm text-gray-500">积分: {points || 0}</span>
            <span className="text-xl">{getBadgeEmoji(points || 0)}</span>
          </div>
        </div>
      </div>
      
      {badges?.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-700">获得的徽章</h4>
          <div className="flex flex-wrap gap-1 mt-1">
            {badges.map((badge, index) => (
              <span key={index} className="text-2xl" title={badge.name}>
                {badge.emoji}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberCard;