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

        const skills = await prisma.skill.findMany({
            where: {
                progress: {
                    userId: session.user.id
                }
            },
            orderBy: {
                level: 'desc'
            }
        });

        return NextResponse.json(skills);
    } catch (error) {
        console.error('Error fetching skills:', error);
        return NextResponse.json(
            { error: 'Failed to fetch skills' },
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

        const { name, level, progress } = await req.json();

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

        // Create or update skill
        const skill = await prisma.skill.upsert({
            where: {
                progressId_name: {
                    progressId: userProgress.id,
                    name
                }
            },
            create: {
                name,
                level,
                progress,
                progressId: userProgress.id
            },
            update: {
                level,
                progress
            }
        });

        return NextResponse.json(skill);
    } catch (error) {
        console.error('Error updating skill:', error);
        return NextResponse.json(
            { error: 'Failed to update skill' },
            { status: 500 }
        );
    }
} 