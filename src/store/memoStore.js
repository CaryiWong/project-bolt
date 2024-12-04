import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BADGE_THRESHOLDS, BADGE_EMOJIS } from '../utils/constants';

const useMemoStore = create(
  persist(
    (set) => ({
      tasks: [],
      familyMembers: [],
      points: {},
      badges: {},
      
      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, { ...task, id: Date.now(), completed: false }]
      })),
      
      completeTask: (taskId, memberId) => set((state) => {
        const task = state.tasks.find(t => t.id === taskId);
        if (!task || !memberId) return state;
        
        const pointValue = task.type === 'important' ? 10 : 5;
        const newPoints = (state.points[memberId] || 0) + pointValue;
        
        // Check if new badges should be awarded
        const currentBadges = state.badges[memberId] || [];
        const newBadges = [...currentBadges];
        
        if (newPoints >= BADGE_THRESHOLDS.CROWN && !currentBadges.some(b => b.emoji === BADGE_EMOJIS.CROWN)) {
          newBadges.push({ emoji: BADGE_EMOJIS.CROWN, name: '皇冠徽章', earnedAt: Date.now() });
        } else if (newPoints >= BADGE_THRESHOLDS.STAR && !currentBadges.some(b => b.emoji === BADGE_EMOJIS.STAR)) {
          newBadges.push({ emoji: BADGE_EMOJIS.STAR, name: '星星徽章', earnedAt: Date.now() });
        } else if (newPoints >= BADGE_THRESHOLDS.SPARKLE && !currentBadges.some(b => b.emoji === BADGE_EMOJIS.SPARKLE)) {
          newBadges.push({ emoji: BADGE_EMOJIS.SPARKLE, name: '闪耀徽章', earnedAt: Date.now() });
        }
        
        return {
          tasks: state.tasks.map(t => 
            t.id === taskId ? { ...t, completed: true, completedAt: Date.now() } : t
          ),
          points: {
            ...state.points,
            [memberId]: newPoints
          },
          badges: {
            ...state.badges,
            [memberId]: newBadges
          }
        };
      }),
      
      addFamilyMember: (member) => set((state) => ({
        familyMembers: [...state.familyMembers, { 
          ...member, 
          id: Date.now(),
          createdAt: Date.now()
        }]
      })),
      
      updateFamilyMember: (memberId, updates) => set((state) => ({
        familyMembers: state.familyMembers.map(member =>
          member.id === memberId ? { ...member, ...updates, updatedAt: Date.now() } : member
        )
      })),
      
      removeFamilyMember: (memberId) => set((state) => ({
        familyMembers: state.familyMembers.filter(member => member.id !== memberId),
        points: Object.fromEntries(
          Object.entries(state.points).filter(([id]) => id !== memberId.toString())
        ),
        badges: Object.fromEntries(
          Object.entries(state.badges).filter(([id]) => id !== memberId.toString())
        ),
        tasks: state.tasks.map(task => 
          task.assignedTo === memberId ? { ...task, assignedTo: null } : task
        )
      })),
      
      removeTask: (taskId) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== taskId)
      })),
      
      updateTask: (taskId, updates) => set((state) => ({
        tasks: state.tasks.map(task =>
          task.id === taskId ? { ...task, ...updates, updatedAt: Date.now() } : task
        )
      }))
    }),
    {
      name: 'family-memo-storage',
      version: 1
    }
  )
);

export default useMemoStore;