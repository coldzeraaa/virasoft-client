import { NextRequest, NextResponse } from 'next/server';

import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';

export async function GET(request: NextRequest) {
  const userToken = request.cookies.get(STORE_KEY_CONFIG.NEXT_USER_TOKEN)?.value;
  if (userToken) {
    const from = request.cookies.get(STORE_KEY_CONFIG.NEXT_FROM)?.value;
    const response = NextResponse.redirect(new URL(from || '/', request.url));
    response.cookies.set(STORE_KEY_CONFIG.NEXT_USER_TOKEN, userToken);
    if (from) response.cookies.delete(STORE_KEY_CONFIG.NEXT_FROM);
    return response;
  }
  return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
}
