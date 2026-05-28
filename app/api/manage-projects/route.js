import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Create new project in the database
    const newProject = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        version: data.version || null,
        tags: data.tags || [],
        image: data.image || null,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
