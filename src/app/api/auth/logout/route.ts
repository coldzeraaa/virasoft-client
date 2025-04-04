import { NextRequest, NextResponse } from "next/server";

import { STORE_KEY_CONFIG } from "@/configs/STORE_KEY_CONFIG";

export async function GET(req: NextRequest) {
  const response = NextResponse.redirect(new URL(`/auth/login`, req.url));
  response.cookies.delete(STORE_KEY_CONFIG.NEXT_USER_TOKEN);
  return response;
}
