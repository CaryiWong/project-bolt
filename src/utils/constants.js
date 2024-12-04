export const TASK_TYPES = {
  daily: { label: '日常任务', color: 'bg-blue-100 text-blue-800' },
  medication: { label: '服药提醒', color: 'bg-red-100 text-red-800' },
  travel: { label: '旅行计划', color: 'bg-green-100 text-green-800' },
  work: { label: '工作计划', color: 'bg-purple-100 text-purple-800' },
  study: { label: '学习计划', color: 'bg-yellow-100 text-yellow-800' }
};

export const BADGE_THRESHOLDS = {
  CROWN: 100,
  STAR: 50,
  SPARKLE: 20
};

export const BADGE_EMOJIS = {
  CROWN: '👑',
  STAR: '⭐',
  SPARKLE: '🌟',
  DEFAULT: '🎯'
};

export const AVATAR_OPTIONS = [
  '👨', '👩', '👦', '👧', '👴', '👵',
  '🧑', '👶', '🧒', '🧓', '👨‍👩‍👦', '👨‍👩‍👧'
];

export const ROLE_LABELS = {
  parent: '家长',
  child: '孩子',
  member: '其他成员'
};