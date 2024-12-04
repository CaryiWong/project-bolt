import { BADGE_THRESHOLDS, BADGE_EMOJIS } from './constants';

export const getBadgeEmoji = (points) => {
  if (points >= BADGE_THRESHOLDS.CROWN) return BADGE_EMOJIS.CROWN;
  if (points >= BADGE_THRESHOLDS.STAR) return BADGE_EMOJIS.STAR;
  if (points >= BADGE_THRESHOLDS.SPARKLE) return BADGE_EMOJIS.SPARKLE;
  return BADGE_EMOJIS.DEFAULT;
};

export const getBadgeInfo = (points) => {
  const badge = {
    emoji: getBadgeEmoji(points),
    name: '初始徽章'
  };
  
  if (points >= BADGE_THRESHOLDS.CROWN) {
    badge.name = '皇冠徽章';
  } else if (points >= BADGE_THRESHOLDS.STAR) {
    badge.name = '星星徽章';
  } else if (points >= BADGE_THRESHOLDS.SPARKLE) {
    badge.name = '闪耀徽章';
  }
  
  return badge;
};