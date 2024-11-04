export interface CourseProgress {
  id: string;
  title: string;
  progress: number;
  totalModules: number;
  completedModules: number;
  category: string;
  lastAccessed: Date;
}

export interface SkillProgress {
  name: string;
  level: number;
  progress: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface UserProgress {
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  completedCourses: number;
  achievements: Achievement[];
  skills: SkillProgress[];
  recentActivities: {
    date: Date;
    action: string;
    details: string;
  }[];
} 