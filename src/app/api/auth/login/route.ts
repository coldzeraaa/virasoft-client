import { OauthFlow } from 'doorkeeper-oauth-flow';
import { NextRequest, NextResponse } from 'next/server';

import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { HOST_CONFIG } from '@/configs/HOST_CONFIG';
import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';

export async function POST(request: NextRequest) {
  const { login, password } = await request.json();
  const result = await oauthFlow.generateToken(undefined, {
    headers: { Authorization: `Basic ${btoa(`${APP_CONFIG.tokens.uid}:${APP_CONFIG.tokens.secret}`)}` },
    body: { grant_type: 'password', password, username: login },
  });
  const userToken = oauthFlow.getToken(result);

  if (userToken) {
    const response = NextResponse.json(userToken, { status: 200 });
    response.cookies.set(STORE_KEY_CONFIG.NEXT_USER_TOKEN, JSON.stringify(userToken));
    return response;
  }

  return NextResponse.json({ message: 'Нууц үг буруу байна' }, { status: 401 });
}

const oauthFlow = new OauthFlow({ uid: APP_CONFIG.tokens.uid, secret: APP_CONFIG.tokens.secret, host: HOST_CONFIG.host });
