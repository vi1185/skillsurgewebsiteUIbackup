import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { questionId, knewAnswer, learnedNew } = await req.json();

    const progress = await prisma.quizProgress.create({
      data: {
        userId: session.user.id,
        questionId,
        knewAnswer,
        learnedNew,
      },
    });

    return NextResponse.json(progress);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 