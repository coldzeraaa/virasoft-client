import { AuthLoginPageClient } from '@/components/page-client/auth/auth-login-page-client';

export default function AuthLoginPage() {
  return (
    <main className="mt-12">
      <h1 className="mb-4 text-center text-2xl">Login</h1>
      <AuthLoginPageClient />
    </main>
  );
}
