import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = 'https://backend-new-opal.vercel.app';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Health check proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to reach backend' },
      { status: 503 }
    );
  }
}