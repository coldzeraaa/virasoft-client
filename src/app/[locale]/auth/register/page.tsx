import { Suspense } from "react";

import Loading from "@/app/[locale]/auth/loading";
import { AuthRegisterPageClient } from "@/components/page-client/auth/auth-register-page-client";

export default function AuthRegister() {
  return (
    <>
      <h1 className="mb-4 text-center text-2xl">Бүртгүүлэх</h1>
      <Suspense fallback={<Loading />}>
        <AuthRegisterPageClient />
      </Suspense>
    </>
  );
}
