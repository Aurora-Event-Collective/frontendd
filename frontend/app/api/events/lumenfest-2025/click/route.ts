import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = 'https://backend-new-opal.vercel.app';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const platform = body.platform;
    
    const response = await fetch(
      `${BACKEND_URL}/api/events/lumenfest-2025/click`, // No query param
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform }), // Send as JSON body
      }
    );

    return NextResponse.json(
      { success: response.ok },
      { status: response.status }
    );
  } catch (error) {
    console.error('Calendar click proxy error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to record click' },
      { status: 500 }
    );
  }
}