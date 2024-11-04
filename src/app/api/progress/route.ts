import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.id) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const progress = await prisma.userProgress.findUnique({
            where: {
                userId: session.user.id
            },
            include: {
                achievements: true,
                skills: true,
                recentActivities: {
                    orderBy: {
                        timestamp: 'desc'
                    },
                    take: 10
                }
            }
        });

        return NextResponse.json(progress);
    } catch (error) {
        console.error('Error fetching progress:', error);
        return NextResponse.json(
            { error: 'Failed to fetch progress' },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.id) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { type, data } = await req.json();

        // Update progress based on activity type
        switch (type) {
            case 'COMPLETE_MODULE':
                await updateModuleProgress(session.user.id, data);
                break;
            case 'EARN_ACHIEVEMENT':
                await unlockAchievement(session.user.id, data);
                break;
            case 'UPDATE_SKILL':
                await updateSkillProgress(session.user.id, data);
                break;
            default:
                throw new Error('Invalid progress update type');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error updating progress:', error);
        return NextResponse.json(
            { error: 'Failed to update progress' },
            { status: 500 }
        );
    }
}

async function updateModuleProgress(userId: string, moduleData: any) {
    await prisma.userProgress.update({
        where: { userId },
        data: {
            completedModules: { increment: 1 },
            totalPoints: { increment: moduleData.points || 0 },
            recentActivities: {
                create: {
                    type: 'MODULE_COMPLETION',
                    details: `Completed module: ${moduleData.title}`,
                    timestamp: new Date()
                }
            }
        }
    });
}

async function unlockAchievement(userId: string, achievementData: any) {
    await prisma.userProgress.update({
        where: { userId },
        data: {
            achievements: {
                create: {
                    ...achievementData,
                    unlockedAt: new Date()
                }
            },
            totalPoints: { increment: achievementData.points || 0 },
            recentActivities: {
                create: {
                    type: 'ACHIEVEMENT_UNLOCKED',
                    details: `Unlocked achievement: ${achievementData.title}`,
                    timestamp: new Date()
                }
            }
        }
    });
}

async function updateSkillProgress(userId: string, skillData: any) {
    await prisma.userProgress.update({
        where: { userId },
        data: {
            skills: {
                upsert: {
                    where: {
                        userId_name: {
                            userId,
                            name: skillData.name
                        }
                    },
                    create: {
                        name: skillData.name,
                        level: skillData.level,
                        progress: skillData.progress
                    },
                    update: {
                        level: skillData.level,
                        progress: skillData.progress
                    }
                }
            }
        }
    });
} 