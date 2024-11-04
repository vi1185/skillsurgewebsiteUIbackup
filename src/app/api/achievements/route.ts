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

        const achievements = await prisma.achievement.findMany({
            where: {
                progress: {
                    userId: session.user.id
                }
            },
            orderBy: {
                unlockedAt: 'desc'
            }
        });

        return NextResponse.json(achievements);
    } catch (error) {
        console.error('Error fetching achievements:', error);
        return NextResponse.json(
            { error: 'Failed to fetch achievements' },
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

        const { title, description, icon } = await req.json();

        // Find or create user progress
        const userProgress = await prisma.userProgress.upsert({
            where: {
                userId: session.user.id
            },
            create: {
                userId: session.user.id,
                totalPoints: 0,
                currentStreak: 0,
                longestStreak: 0
            },
            update: {}
        });

        // Create achievement
        const achievement = await prisma.achievement.create({
            data: {
                title,
                description,
                icon,
                unlockedAt: new Date(),
                progressId: userProgress.id
            }
        });

        // Update user progress points
        await prisma.userProgress.update({
            where: {
                id: userProgress.id
            },
            data: {
                totalPoints: {
                    increment: 100 // Points for achievement
                }
            }
        });

        return NextResponse.json(achievement);
    } catch (error) {
        console.error('Error creating achievement:', error);
        return NextResponse.json(
            { error: 'Failed to create achievement' },
            { status: 500 }
        );
    }
} 