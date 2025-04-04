import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json();

    if (!path)
      return NextResponse.json(
        { message: "Path parameter is required" },
        { status: 400 },
      );
    revalidatePath(path);

    return NextResponse.json(
      {
        revalidated: true,
        message: `Path "${path}" revalidated successfully`,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error revalidating path",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

// curl -X POST http://your-site.com/api/revalidate \
//     -H "Content-Type: application/json" \
//   -d '{"path": "/blog/post-1"}'
