import { Suspense } from "react";

import Loading from "../loading";

import { AuthLoginPageClient } from "@/components/page-client/auth/auth-login-page-client";

export default function AuthLoginPage() {
  return (
    <>
      <h1 className="mb-4 text-center text-2xl">Нэвтрэх</h1>
      <Suspense fallback={<Loading />}>
        <AuthLoginPageClient />
      </Suspense>
    </>
  );
}
