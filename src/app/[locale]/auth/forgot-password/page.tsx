import { Suspense } from "react";

import Loading from "../loading";

import { AuthForgotPasswordPageClient } from "@/components/page-client/auth/auth-forgot-password-page-client";

export default async function ForgotPassword() {
  return (
    <>
      <h1 className="mb-4 text-center text-2xl">Нууц үг сэргээх</h1>
      <Suspense fallback={<Loading />}>
        <AuthForgotPasswordPageClient />
      </Suspense>
    </>
  );
}
