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

        const learningPaths = await prisma.learningPath.findMany({
            where: {
                OR: [
                    { isPublic: true },
                    { userId: session.user.id }
                ]
            },
            include: {
                modules: true,
                _count: {
                    select: { enrolledUsers: true }
                }
            }
        });

        return NextResponse.json(learningPaths);
    } catch (error) {
        console.error('Error fetching learning paths:', error);
        return NextResponse.json(
            { error: 'Failed to fetch learning paths' },
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

        const data = await req.json();
        const learningPath = await prisma.learningPath.create({
            data: {
                ...data,
                userId: session.user.id
            }
        });

        return NextResponse.json(learningPath);
    } catch (error) {
        console.error('Error creating learning path:', error);
        return NextResponse.json(
            { error: 'Failed to create learning path' },
            { status: 500 }
        );
    }
} 